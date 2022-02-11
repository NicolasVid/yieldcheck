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
  defaultExpanded?: boolean
}

const AccordionWrapper = ({
  children,
  title,
  defaultExpanded,
}: AccordionWrapperProps) => (
  <Accordion sx={{ marginBottom: '1rem' }} defaultExpanded={defaultExpanded}>
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
