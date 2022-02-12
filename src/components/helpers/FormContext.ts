import { createContext } from 'react'

export interface FormValues {
  buyPrice: number
  notaryFees: number
  contribution: number
  works: number
  furnishing: number
  rent: number
  charges: number
  propertyTax: number
  taxRate: number
  loanAmount: number
  loanTime: number
  interestRate: number
  assuranceRate: number
}

export type FormTypes =
  | 'buyPrice'
  | 'notaryFees'
  | 'contribution'
  | 'works'
  | 'furnishing'
  | 'rent'
  | 'charges'
  | 'propertyTax'
  | 'taxRate'
  | 'loanAmount'
  | 'loanTime'
  | 'interestRate'
  | 'assuranceRate'

export const initialFormValues = {
  buyPrice: 0,
  notaryFees: 0,
  contribution: 0,
  works: 0,
  furnishing: 0,
  rent: 0,
  charges: 0,
  propertyTax: 0,
  taxRate: 0,
  loanAmount: 0,
  loanTime: 20,
  interestRate: 1.16,
  assuranceRate: 0.34,
}

const FormContext = createContext({
  formValues: initialFormValues,
  setFormValues: (
    _args: FormValues | ((_args: FormValues) => FormValues)
  ) => {},
})

export default FormContext
