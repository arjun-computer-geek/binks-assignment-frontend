import React, { useState } from 'react'
import Profile from '../assets/profile-pic.png'
import { Link } from 'react-router-dom'
import AvatarSmall from './AvatarSmall'
const Comment = ({ data }) => {
    return (
        <div className='ml-14 m-2 p-5 rounded bg-gray-100'>
            <div className="w-full flex items-start dark:text-white ">
                <AvatarSmall img={Profile} />
                <Link to={`/profile`}>
                    <div className="flex m-2">
                        <p className="font-semibold text-gray-700">{data.user.name}</p>
                        <p className=" text-gray-600 ml-2">@ {data.user.username}</p>
                    </div>
                </Link>
            </div>
            <div className='my-2'>
                {data?.description}
            </div>
        </div>
    )
}
export default Comment