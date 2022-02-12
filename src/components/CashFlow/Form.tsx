import { FormControl, TextField } from '@mui/material'
import { useContext } from 'react'
import { calculateLoanAmount } from '../helpers/cashflow'
import FormContext from '../helpers/FormContext'
import BaseInput from '../Presentationals/BaseInput'

const Form = () => {
  const { formValues } = useContext(FormContext)
  const loanAmount = calculateLoanAmount(formValues)
  const { loanTime, interestRate, assuranceRate, contribution } = formValues
  return (
    <FormControl sx={{ width: '100%', marginTop: '0.5rem' }}>
      <TextField
        variant="outlined"
        type="number"
        label="Montant du prêt"
        value={loanAmount}
        disabled
        sx={{ width: '100%', marginBottom: '1rem' }}
      />
      <BaseInput
        type="contribution"
        label="Apport"
        defaultValue={contribution}
      />
      <BaseInput
        type="loanTime"
        label="Durée du prêt (en années)"
        defaultValue={loanTime}
      />
      <BaseInput
        type="interestRate"
        label="Taux d'intêret (en %)"
        defaultValue={interestRate}
      />
      <BaseInput
        type="assuranceRate"
        label="Taux d'assurance (en %)"
        defaultValue={assuranceRate}
      />
    </FormControl>
  )
}

export default Form
