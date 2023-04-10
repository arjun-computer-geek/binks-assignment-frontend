import React, { useState } from 'react'
import NavSidebar from '../layouts/NavSidebar'
import Banner from '../assets/banner.jpg'
import ProfilePic from '../assets/profile-pic.png'
import { useSelector } from 'react-redux'
import EditProfileModal from '../components/EditProfileModal'
const Profile = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <NavSidebar>
            <div className='w-full col-start-2 col-span-4 p-8'>
                <div className="flex border-2 col-span-6">
                    <div className="flex flex-col w-full  m-2 sm:m-4 rounded ">
                        <div className="flex flex-col p-4">
                            <div className="relative flex justify-center">
                                <img
                                    src={Banner}
                                    alt="user background image"
                                    className="w-full h-[12rem]"
                                />
                                <div className="absolute bottom-0 -my-16 ">
                                    <img
                                        src={ProfilePic}
                                        alt=" user profile pic"
                                        className="border-8 h-32 w-32 rounded-full bg-red-700"
                                    />
                                </div>
                            </div>

                            <EditProfileModal />

                            <div className=" px-4 py-2 "></div>

                            <div className="flex flex-col text-lg items-center mt-8">
                                <p className="mt-2 font-bold text-2xl">{user?.name}</p>
                                <p className="text-slate-600">{user?.username}</p>
                                <p className="text-center ">
                                    {user?.bio}
                                </p>
                                <p className="text-center text-slate-600">
                                    Email :  {user?.email}
                                </p>
                                {/* <div className="w-[90%] rounded h-20 mt-4 flex justify-around  items-center">
                                    <div className="flex flex-col items-center">
                                        <p className="font-bold">0</p>
                                        <p>posts</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavSidebar>

    )
}

export default Profile