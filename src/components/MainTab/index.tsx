import { useState, SyntheticEvent } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import TabPanel from './TabPanel'
import Yield from '../Yield'
import FormContext, {
  FormValues,
  initialFormValues,
} from '../helpers/FormContext'
import CashFow from '../CashFlow'

interface MainTabProps {
  tabList: string[]
}

const MainTab = ({ tabList }: MainTabProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue)
  }

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  })

  return (
    <>
      <FormContext.Provider value={{ formValues, setFormValues }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            onChange={handleTabChange}
            value={currentTabIndex}
            aria-label="main tab"
          >
            {tabList.map((tab, index: number) => (
              <Tab
                key={tab}
                label={tab}
                {...a11yProps(index)}
                sx={{ flex: 1 }}
              />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={currentTabIndex} index={0}>
          <Yield />
        </TabPanel>
        <TabPanel value={currentTabIndex} index={1}>
          <CashFow />
        </TabPanel>
      </FormContext.Provider>
    </>
  )
}

export default MainTab
