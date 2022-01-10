import * as React from 'react';
import { drawerBudgetary } from './drawerBudgetary'
import Navbar from '../../components/ui/Navbar'
//import { Quotes } from '../../components/budgetary/Quotes/Quotes'

function DashboardBudgetary() {

  return (
    <Navbar menu={drawerBudgetary} />

  )
}

export default DashboardBudgetary;
