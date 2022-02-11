import { FormControl } from '@mui/material'
import { useContext } from 'react'
import { calculateLoanAmount } from '../helpers/cashflow'
import FormContext from '../helpers/FormContext'
import BaseInput from '../Presentationals/BaseInput'

const Form = () => {
  const { formValues } = useContext(FormContext)
  const loanAmount = calculateLoanAmount(formValues)
  return (
    <FormControl sx={{ width: '100%', marginTop: '0.5rem' }}>
      <BaseInput
        type="loanAmount"
        label="Montant du prêt"
        value={loanAmount}
        disabled
      />
      <BaseInput type="contribution" label="Apport" />
      <BaseInput type="loanTime" label="Durée du prêt (en années)" />
      <BaseInput type="interestRate" label="Taux d'intêret (en %)" />
      <BaseInput type="assuranceRate" label="Taux d'assurance (en %)" />
    </FormControl>
  )
}

export default Form
