import { FormValues } from './FormContext'

export const calculateLoanAmount = (formValues: FormValues): number => {
  const { buyPrice, contribution, notaryFees, works, furnishing } = formValues
  const loanAmount = buyPrice + notaryFees + works + furnishing - contribution
  return loanAmount
}

export const calculateMonthlyPayment = (formValues: FormValues): number => {
  const { loanTime, interestRate, assuranceRate } = formValues
  const globalRate = (interestRate + assuranceRate) / 100
  const periodicRate = Math.pow(1 + globalRate, 1 / 12) - 1
  const loanAmount = calculateLoanAmount(formValues)
  const monthlyPayment =
    (loanAmount * periodicRate * Math.pow(1 + periodicRate, loanTime * 12)) /
    (Math.pow(1 + periodicRate, loanTime * 12) - 1)
  return Math.round(monthlyPayment)
}

export const calculateCashFlow = (formValues: FormValues): number => {
  const montlyPayments = calculateMonthlyPayment(formValues)
  const { rent, taxRate, charges, propertyTax } = formValues
  const monthlyTax = (charges + propertyTax) / 12
  const monlthyFiscalTaxs = rent * 0.5 * ((taxRate + 17.2) / 100)
  const cashFlow = rent - monlthyFiscalTaxs - monthlyTax - montlyPayments
  return Math.round(cashFlow)
}
