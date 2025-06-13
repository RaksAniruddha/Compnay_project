import Footer from '@/components/Footer';
import Navber from '@/components/Navber'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function MainLayout() {
  const location = useLocation();

  const hideFooterRoutes = ['/register', '/login', '/reset-password', '/check-email', '/verification', '/create-new-password'];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  // const shouldHideFooter = /^(\/register|\/login|\/reset-password|\/check-email|\/verification|\/create-new-password)$/.test(location.pathname);

  return (
    <div className=' flex flex-col min-h-screen'>
      <Navber />
      <div>
        <Outlet />
      </div>
      {!shouldHideFooter && <Footer/>}
    </div>
  )
}

export default MainLayout