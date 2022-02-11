import { FormControl } from '@mui/material'
import AccordionWrapper from '../../Presentationals/Accordion'
import BaseInput from '../../Presentationals/BaseInput'

const NetYieldForm = () => (
  <AccordionWrapper title="Rendement net">
    <FormControl sx={{ width: '100%' }}>
      <BaseInput type="charges" label="Charges annuelles non récupérables" />
      <BaseInput type="propertyTax" label="Taxe foncière" />
    </FormControl>
  </AccordionWrapper>
)

export default NetYieldForm
