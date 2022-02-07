import { Box, FormControl } from '@mui/material'
import AccordionWrapper from './Accordion'
import BaseInput from './BaseInput'

const RawYieldForm = () => (
  <AccordionWrapper title="Rendement brut">
    <FormControl sx={{ width: '100%' }}>
      <BaseInput type="buyPrice" label="Prix du bien" required />
      <BaseInput type="notaryFees" label="Frais de notaire" />
      <BaseInput type="contribution" label="Apport" />
      <BaseInput type="works" label="Coût des travaux" />
      <BaseInput type="furnishing" label="Ammeublement" />
      <BaseInput type="rent" label="Loyer mensuel HT" required />
    </FormControl>
  </AccordionWrapper>
)

export default RawYieldForm
