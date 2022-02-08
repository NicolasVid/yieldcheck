import { createContext } from 'react'
import { FormValues } from '..'

export const initialFormValues = {
  buyPrice: 1,
  notaryFees: 0,
  contribution: 0,
  works: 0,
  furnishing: 0,
  rent: 0,
  charges: 0,
  propertyTax: 0,
  taxRate: 0,
}

const FormContext = createContext({
  formValues: initialFormValues,
  setFormValues: (prevState: FormValues) => {},
})

export default FormContext
