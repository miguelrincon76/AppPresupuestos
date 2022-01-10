import * as React from 'react';
import { drawerAdmin } from './drawerAdmin'
import Navbar from '../../components/ui/Navbar'

function DashboardAdmin() {

  return (
    <Navbar menu={drawerAdmin} />
  )
}

export default DashboardAdmin;
