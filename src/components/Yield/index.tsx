import { Box } from '@mui/material'
import { useState } from 'react'
import YieldForm from './Form'
import FormContext, { initialFormValues } from './Form/FormContext'
import YieldHeader from './Header'

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
}

const Yield = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
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
    </FormContext.Provider>
  )
}

export default Yield
