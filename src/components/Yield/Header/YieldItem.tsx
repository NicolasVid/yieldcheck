import { Typography, Box } from '@mui/material'

interface YieldDisplayProps {
  calculatedYield: number
  description: string
}

const YieldItem = ({ calculatedYield, description }: YieldDisplayProps) => {
  let color = 'success.main'
  if (calculatedYield < 8) color = 'warning.main'
  if (calculatedYield < 5) color = 'error.main'
  return (
    <Box>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '3.5rem',
          color,
        }}
      >
        {`${calculatedYield}%`}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color,
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default YieldItem
