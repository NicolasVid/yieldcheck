import { Box, FormControl } from '@mui/material'
import AccordionWrapper from './Accordion'
import BaseInput from './BaseInput'

const RawYieldForm = () => (
  <Box>
    <AccordionWrapper title="Rendement net">
      <FormControl sx={{ width: '100%' }}>
        <BaseInput type="charges" label="Charges annuelles non récupérables" />
        <BaseInput type="propertyTax" label="Taxe foncière" />
      </FormControl>
    </AccordionWrapper>
  </Box>
)

export default RawYieldForm
