import { StandardTextFieldProps, TextField } from '@mui/material'
import { ChangeEvent, useContext } from 'react'
import FormContext, { FormTypes, FormValues } from '../helpers/FormContext'

interface BaseInputProps extends StandardTextFieldProps {
  type: FormTypes
}

const BaseInput = ({
  type,
  label,
  required,
  value,
  disabled,
}: BaseInputProps) => {
  const { formValues, setFormValues } = useContext(FormContext)
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, _type: FormTypes) => {
    const newValue = event.target.value || '0'
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [_type]: parseInt(newValue, 10),
    }))
  }

  const defaultValue = formValues[type] !== 0 && formValues[type]

  return (
    <TextField
      label={label}
      onChange={(event) => handleChange(event, type)}
      variant="outlined"
      type="number"
      value={value}
      disabled={disabled}
      defaultValue={defaultValue}
      InputProps={{ inputProps: { min: 0 } }}
      sx={{ width: '100%', marginBottom: '1rem' }}
      required={required}
    />
  )
}

export default BaseInput
