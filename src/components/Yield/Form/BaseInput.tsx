import { TextField } from '@mui/material'
import { useContext } from 'react'
import { FormValues } from '..'
import FormContext from './FormContext'

interface BaseInputProps {
  label: string
  type: string
  required?: boolean
}

const BaseInput = ({ type, label, required }: BaseInputProps) => {
  const { setFormValues } = useContext(FormContext)
  const handleChange = (event: any, _type: string) => {
    const newValue = event.target.value
    setFormValues(((prevState: FormValues) => ({
      ...prevState,
      [_type]: parseInt(newValue, 10),
    })) as any)
  }
  return (
    <TextField
      label={label}
      onChange={(event) => handleChange(event, type)}
      variant="outlined"
      color="primary"
      type="number"
      InputProps={{ inputProps: { min: 0 } }}
      sx={{ width: '100%', marginBottom: '1rem' }}
      required={required}
    />
  )
}

export default BaseInput
