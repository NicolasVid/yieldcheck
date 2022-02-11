import { FormControl } from '@mui/material'
import AccordionWrapper from '../../Presentationals/Accordion'
import BaseInput from '../../Presentationals/BaseInput'

const RawYieldForm = () => (
  <AccordionWrapper title="Rendement brut" defaultExpanded>
    <FormControl sx={{ width: '100%' }}>
      <BaseInput type="buyPrice" label="Prix du bien" required />
      <BaseInput type="notaryFees" label="Frais de notaire" />
      <BaseInput type="works" label="Coût des travaux" />
      <BaseInput type="furnishing" label="Ammeublement" />
      <BaseInput type="rent" label="Loyer mensuel HT" required />
    </FormControl>
  </AccordionWrapper>
)

export default RawYieldForm
