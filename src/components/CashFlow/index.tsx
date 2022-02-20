import { Typography } from '@mui/material'
import { useContext } from 'react'
import FormContext from '../helpers/FormContext'
import Form from './Form'
import Header from './Header'

const CashFow = () => {
  const {
    formValues: { buyPrice, rent },
  } = useContext(FormContext)
  if (buyPrice && rent) {
    return (
      <>
        <Header />
        <Form />
      </>
    )
  }
  return (
    <Typography sx={{ padding: '0.5rem 1rem .25rem 1rem' }} color="secondary">
      A minima, les champs "Prix du bien" et "Loyer mensuel HT" doivent être
      renseignés afin de calculer le cash flow
    </Typography>
  )
}

export default CashFow
