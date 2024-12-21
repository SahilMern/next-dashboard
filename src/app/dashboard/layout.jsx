import React from 'react'
import Sidebar from '../_components/dashboard/sidebar/Sidebar'
import Navbar from '../_components/dashboard/navbar/Navbar'
import Style from "../_components/dashboard/dashboard.module.css"
import Footer from '../_components/dashboard/Footer/Footer'

const layout = ({children}) => {
  return (
    <div className={Style.container}>
        <div className={Style.menu}>
            <Sidebar />
        </div>
        <div className={Style.content}>
            <Navbar />
            <div className={Style.DashBoardBody}>
            {children}
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default layout