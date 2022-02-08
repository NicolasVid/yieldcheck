import { Typography, Box } from '@mui/material'

interface YieldDisplayProps {
  calculatedYield: string
  description: string
}

const YieldItem = ({ calculatedYield, description }: YieldDisplayProps) => {
  let color = 'success.main'
  if (parseInt(calculatedYield) < 8) color = 'warning.main'
  if (parseInt(calculatedYield) < 5) color = 'error.main'
  return (
    <Box>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '3rem',
          color,
        }}
      >
        {`${calculatedYield}%`}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '1rem',
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
