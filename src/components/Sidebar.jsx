import React from 'react'

const Sidebar = () => {
    return (
        <aside className="self-start col-span-2 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ">
                Home
            </a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ">
                Dashboard
            </a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-200 ">
                Profile
            </a>

        </aside>
    )
}
export default Sidebar
