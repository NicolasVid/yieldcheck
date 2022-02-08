import { FormValues } from '../Yield'

export const calculateRawYieldFromValues = (formValues: FormValues) => {
  const { buyPrice, contribution, works, furnishing, rent } = formValues
  const totalCost = buyPrice + contribution + works + furnishing
  const finalYield = (rent * 12 * 100) / totalCost
  return finalYield.toFixed(2)
}

export const calculateNetYieldFromValues = (formValues: FormValues) => {
  const {
    buyPrice,
    contribution,
    works,
    furnishing,
    rent,
    charges,
    propertyTax,
  } = formValues
  const totalCost =
    buyPrice + contribution + works + furnishing + charges + propertyTax
  const finalYield = (rent * 12 * 100) / totalCost
  return finalYield.toFixed(2)
}

export const calculateNetTaxYieldFromValues = (formValues: FormValues) => {
  const {
    buyPrice,
    contribution,
    works,
    furnishing,
    rent,
    charges,
    propertyTax,
    taxRate,
  } = formValues
  const taxs = rent * 12 * 100 * 0.5 * (taxRate / 100)
  const totalCost =
    buyPrice + contribution + works + furnishing + charges + propertyTax
  const annualRent = rent * 12 * 100
  const finalYield = (annualRent - taxs) / totalCost
  return finalYield.toFixed(2)
}
