import { Box } from '@mui/material'
import { useContext } from 'react'
import YieldForm from './Form'
import FormContext from '../helpers/FormContext'
import YieldHeader from './Header'

const Yield = () => {
  const { formValues } = useContext(FormContext)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <YieldHeader formValues={formValues} />
      <YieldForm />
    </Box>
  )
}

export default Yield
