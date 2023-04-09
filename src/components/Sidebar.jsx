import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation()
    return (
        <aside className="self-start col-span-1 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
            <Link to="/" className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ${location.pathname === '/' && 'bg-blue-300'}`}>
                Home
            </Link>
            <Link to="/dashboard" className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ${location.pathname === '/dashboard' && 'bg-blue-300'}`}>
                Dashboard
            </Link>
            <Link to="/profile" className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ${location.pathname === '/profile' && 'bg-blue-300'}`}>
                Profile
            </Link>

        </aside>
    )
}
export default Sidebar
