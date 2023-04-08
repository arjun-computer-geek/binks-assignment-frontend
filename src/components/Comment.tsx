import React, { useState } from 'react'
import Profile from '../assets/profile-pic.png'
import { AvatarSmall } from './AvatarSmall'
import { Link } from 'react-router-dom'

export const Comment = () => {

    return (
        <div className='ml-14 m-2 p-5 rounded bg-gray-100'>
            <div className="w-full flex items-start dark:text-white ">
                <AvatarSmall img={Profile} />
                <Link to={`/profile`}>
                    <div className="flex m-2">
                        <p className="font-semibold">Arjun</p>
                        <p className="dark:text-slate-300 text-slate-600 ml-2">@ kumar</p>
                    </div>
                </Link>
            </div>
            <div className='my-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quis tenetur nisi natus. Error, placeat exercitationem? Sit, atque dicta totam assumenda itaque quia aliquid? Tenetur fuga eius corporis aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quis tenetur nisi natus. Error, placeat exercitationem? Sit, atque dicta totam assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quis tenetur nisi natus. Error, placeat exercitationem? Sit, atque dicta totam assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quis tenetur nisi natus. Error, placeat exercitationem? Sit, atque dicta totam assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et quis tenetur nisi natus. Error, placeat exercitationem? Sit, atque dicta totam assumenda
            </div>
        </div>
    )
}
