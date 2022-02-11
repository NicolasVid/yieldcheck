import { Box, Typography } from '@mui/material'
import { FormValues } from '../../helpers/FormContext'
import {
  calculateNetTaxYieldFromValues,
  calculateNetYieldFromValues,
  calculateRawYieldFromValues,
} from '../../helpers/yields'
import YieldItem from './YieldItem'

interface YieldHeaderProps {
  formValues: FormValues
}

const YieldHeader = ({ formValues }: YieldHeaderProps) => {
  const rawYield = calculateRawYieldFromValues(formValues)
  const netYield = calculateNetYieldFromValues(formValues)
  const netTaxYield = calculateNetTaxYieldFromValues(formValues)
  if (rawYield) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 1rem .25rem 1rem',
        }}
      >
        <YieldItem calculatedYield={rawYield} description="brut" />
        <YieldItem calculatedYield={netYield} description="net" />
        <YieldItem calculatedYield={netTaxYield} description="net-net" />
      </Box>
    )
  }
  return (
    <Typography sx={{ padding: '0.5rem 1rem .25rem 1rem' }} color="secondary">
      Les champs marqués d'un astérisque (*) sont des champs obligatoires
    </Typography>
  )
}

export default YieldHeader
