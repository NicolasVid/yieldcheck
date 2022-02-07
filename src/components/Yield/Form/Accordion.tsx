import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReactNode } from 'react'

interface AccordionWrapperProps {
  children: ReactNode
  title: string
}

const AccordionWrapper = ({ children, title }: AccordionWrapperProps) => (
  <Accordion sx={{ marginBottom: '1rem' }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
)

export default AccordionWrapper
