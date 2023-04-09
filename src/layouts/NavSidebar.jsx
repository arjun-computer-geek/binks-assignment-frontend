import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const NavSidebar = ({ children }) => {
    return (<div className=' grid overflow-hidden h-screen '>
        <Header />
        <div className="grid grid-cols-7">
            <Sidebar />
            <main className="grid grid-cols-6 col-span-6 overflow-y-auto h-screen pb-20">
                {children}
            </main>
        </div>
    </div>
    )
}
export default NavSidebar