import { Typography, Box } from '@mui/material'

interface HeaderItemProps {
  amount: number
  title: string
}

const HeaderItem = ({ amount, title }: HeaderItemProps) => {
  let color = 'success.main'
  if (amount < 0) color = 'warning.main'
  if (amount < -50) color = 'error.main'
  return (
    <Box>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '1.5rem',
          color,
        }}
      >
        {title}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontWeight: '800',
          fontSize: '3.5rem',
          color,
        }}
      >
        {amount}
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
        € / mois
      </Typography>
    </Box>
  )
}

export default HeaderItem
