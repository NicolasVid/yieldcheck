import React from 'react'
import MainTab from '../MainTab'

const App = () => {
  const tabList: string[] = [
    'Rendement brut',
    'Rendement net',
    'Rendement net-net',
  ]
  return <MainTab tabList={tabList} />
}

export default App
