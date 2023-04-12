import { Box, Link, Typography } from '@mui/material'
import MainTab from '../MainTab'

const App = () => {
  const tabList: string[] = ['Rendement', 'Cash Flow']
  return (
    <Box>
      <Typography
        textAlign="center"
        sx={{ backgroundColor: 'grey.100', padding: '0.2rem' }}
      >
        Suivez vos loyers simplement et gratuitement avec notre application
        <br />
        <Link
          href="https://www.suistesloyers.fr"
          sx={{ textDecoration: 'none', fontWeight: 'bold' }}
        >
          Suis Tes Loyers
        </Link>
      </Typography>
      <MainTab tabList={tabList} />
    </Box>
  )
}

export default App
