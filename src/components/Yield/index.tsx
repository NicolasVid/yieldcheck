import { Box } from '@mui/material'
import { useState } from 'react'
import RawYieldForm from './Form/RawYieldForm'
import NetYieldForm from './Form/NetYieldForm'
import FormContext, { initialFormValues } from './Form/FormContext'
import YieldHeader from './Header'
import NetTaxYieldForm from './Form/NetTaxYieldForm'

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
        <RawYieldForm />
        <NetYieldForm />
        <NetTaxYieldForm />
      </Box>
    </FormContext.Provider>
  )
}

export default Yield
