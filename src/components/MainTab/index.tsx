import React, { useState, SyntheticEvent } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import TabPanel from './TabPanel'

interface MainTabProps {
  tabList: string[]
}

const MainTab = ({ tabList }: MainTabProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue)
  }

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  })

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          onChange={handleTabChange}
          value={currentTabIndex}
          aria-label="main tab"
        >
          {tabList.map((tab, index: number) => (
            <Tab label={tab} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabList.map((tab, index: number) => (
        <TabPanel value={currentTabIndex} index={index}>
          {tab}
        </TabPanel>
      ))}
    </>
  )
}

export default MainTab
