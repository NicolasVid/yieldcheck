import { Box } from '@mui/material'
import { FormValues } from '..'
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
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
      }}
    >
      <YieldItem calculatedYield={rawYield} description="brut" />
      <YieldItem calculatedYield={netYield} description="net" />
      <YieldItem calculatedYield={netTaxYield} description="net-net" />
    </Box>
  )
}

export default YieldHeader
