import { StandardTextFieldProps, TextField } from '@mui/material'
import { ChangeEvent, useContext } from 'react'
import FormContext, { FormTypes, FormValues } from '../helpers/FormContext'

interface BaseInputProps extends StandardTextFieldProps {
  type: FormTypes
}

const BaseInput = ({ type, ...rest }: BaseInputProps) => {
  const { formValues, setFormValues } = useContext(FormContext)
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    _type: FormTypes
  ) => {
    const newValue = event.target.value || '0'
    setFormValues((prevState: FormValues) => ({
      ...prevState,
      [_type]: parseFloat(newValue),
    }))
  }
  const getNonNullDefaultValues = () => {
    if (formValues[type] === 0) {
      return
    }
    return formValues[type]
  }

  const defaultValue = getNonNullDefaultValues()

  return (
    <TextField
      onChange={(event) => handleChange(event, type)}
      variant="outlined"
      type="number"
      InputProps={{ inputProps: { min: 0 } }}
      sx={{ width: '100%', marginBottom: '1rem' }}
      defaultValue={defaultValue}
      {...rest}
    />
  )
}

export default BaseInput
