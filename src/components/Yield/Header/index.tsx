import { Box } from '@mui/material'
import { FormValues } from '..'
import { calculateYieldFromValues } from '../../helpers/calculateYieldFromValues'
import YieldItem from './YieldItem'

interface YieldHeaderProps {
  formValues: FormValues
}

const YieldHeader = ({ formValues }: YieldHeaderProps) => {
  const rawYield = calculateYieldFromValues(formValues)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
      }}
    >
      <YieldItem calculatedYield={rawYield} description="brut" />
      <YieldItem calculatedYield={5} description="net" />
      <YieldItem calculatedYield={4.3} description="net-net" />
    </Box>
  )
}

export default YieldHeader
