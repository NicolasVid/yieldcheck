import { FormControl, Typography } from '@mui/material'
import { useContext } from 'react'
import FormContext from '../../helpers/FormContext'
import AccordionWrapper from '../../Presentationals/Accordion'
import BaseInput from '../../Presentationals/BaseInput'

const NetTaxYieldForm = () => {
  const {
    formValues: { taxRate },
  } = useContext(FormContext)
  return (
    <AccordionWrapper title="Données rendement net-net">
      <Typography>
        *Calcul sur la base d'un régime micro-BIC ou micro-foncier:
      </Typography>
      <FormControl sx={{ width: '100%', marginTop: '0.5rem' }}>
        <BaseInput
          type="taxRate"
          label="Taux d'imposition marginal (en %)"
          defaultValue={taxRate}
        />
      </FormControl>
    </AccordionWrapper>
  )
}

export default NetTaxYieldForm
