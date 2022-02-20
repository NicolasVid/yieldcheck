import { FormValues } from './FormContext'

export const calculateRawYieldFromValues = (formValues: FormValues) => {
  const { buyPrice, notaryFees, works, furnishing, rent } = formValues
  if (!buyPrice || !rent) {
    return
  }
  const totalCost = buyPrice + notaryFees + works + furnishing
  const finalYield = (rent * 12 * 100) / totalCost
  return parseFloat(finalYield.toFixed(2))
}

export const calculateNetYieldFromValues = (formValues: FormValues) => {
  const {
    buyPrice,
    notaryFees,
    works,
    furnishing,
    rent,
    charges,
    propertyTax,
  } = formValues
  const totalCost = buyPrice + notaryFees + works + furnishing
  const annualRent = rent * 12
  const finalYield = ((annualRent - charges - propertyTax) * 100) / totalCost
  return parseFloat(finalYield.toFixed(2))
}

export const calculateNetTaxYieldFromValues = (formValues: FormValues) => {
  const {
    buyPrice,
    notaryFees,
    works,
    furnishing,
    rent,
    charges,
    propertyTax,
    taxRate,
  } = formValues
  const taxs = rent * 12 * 0.5 * ((taxRate + 17.2) / 100)
  const totalCost = buyPrice + notaryFees + works + furnishing
  const annualRent = rent * 12
  const finalYield =
    ((annualRent - taxs - charges - propertyTax) * 100) / totalCost
  return parseFloat(finalYield.toFixed(2))
}
