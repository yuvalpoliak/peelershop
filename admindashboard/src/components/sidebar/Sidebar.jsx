import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

 const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='top'>
    <span className='logo'>Peeler Admin</span>
    </div>
    <hr/>
    <div className='center'>
        <ul>
        <p className='title'>MAIN</p>
            <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span></li>
            <p className='title'>LISTS</p>
            <li>
            <PersonOutlineIcon className='icon'/>
            <span>Users</span></li>
             <li>
             <ShoppingBagIcon className='icon'/>
             <span>Products</span></li>
            <li>
            <AccessTimeIcon className='icon'/>
            <span>Orders</span></li>
            <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span></li>
            <p className='title'>USEFUL LINKS</p>
            <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span></li>
            <li>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span></li>
            <p className='title'>SERVICE</p>
            <li>
            <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span></li>
            <li>
            <BookIcon className='icon'/>
            <span>Logs</span></li>
            <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span></li>
            <p className='title'>USER</p>
            <li>
            <AccountBoxIcon className='icon'/>
            <span>Profile</span></li>
            <li>
            <ExitToAppIcon className='icon'/>
            <span>Logout</span></li>

        </ul>
    </div>
    <div className='bottom'>
    <div className='colorOption'></div>
    <div className='colorOption'></div>
    </div>
    </div>
  )
}
export default Sidebar