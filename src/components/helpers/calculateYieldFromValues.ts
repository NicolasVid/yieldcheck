import { FormValues } from '../Yield'

export const calculateYieldFromValues = (formValues: FormValues) => {
  const { buyPrice, contribution, works, furnishing, rent } =
    formValues
  const totalCost = buyPrice + contribution + works + furnishing
  const finalYield = (rent * 12 * 100) / totalCost
  return finalYield
}
