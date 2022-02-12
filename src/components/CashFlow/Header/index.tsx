import { Box } from '@mui/material'
import { useContext } from 'react'
import { calculateCashFlow, calculateMonthlyPayment } from '../../helpers/cashflow'
import FormContext from '../../helpers/FormContext'
import HeaderItem from './HeaderItem'

const Header = () => {
  const { formValues } = useContext(FormContext)
  const monthlyPayment = calculateMonthlyPayment(formValues)
  const cashFlow = calculateCashFlow(formValues)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 4.5rem .25rem 4.5rem',
      }}
    >
      <HeaderItem amount={monthlyPayment} title="Mensualités" />
      <HeaderItem amount={cashFlow} title="Cash Flow" />
    </Box>
  )
}

export default Header
