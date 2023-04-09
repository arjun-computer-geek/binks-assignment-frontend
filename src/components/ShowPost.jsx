import React, { useEffect, useState } from 'react'
import Profile from '../assets/profile-pic.png'
import LikeIcon from '../assets/like.png'
import CommentIcon from '../assets/comment.png'
import SendIcon from '../assets/send.png'
import { Avatar } from './Avatar'
import { Link } from 'react-router-dom'
import { AvatarSmall } from './AvatarSmall'
import { Comment } from './Comment'
import parse from 'html-react-parser'

export const ShowPost = ({ data }) => {
    const [showComment, setShowComment] = useState("hidden");
    console.log(data, 'data')
    return (
        <div className='bg-white rounded p-5 my-5'>
            <div className="w-full flex items-start dark:text-white ">
                <Avatar img={Profile} />
                <Link to={`/profile`}>
                    <div className="flex m-2">
                        <p className="font-semibold text-gray-700">{data?.user?.name}</p>
                        <p className=" text-gray-600 ml-2">@ {data?.user?.username}</p>
                    </div>
                </Link>
            </div>
            <div className='my-2'>
                {parse(data?.description)}
            </div>
            <div className='flex items-center justify-between border-b-2 border-gray-200 my-5 py-2'>
                <div className='flex items-center'>
                    <img className='h-5 ' src={LikeIcon} />
                    <span className='ml-2'>{data?.likes?.length ? data?.likes?.length : 0} likes</span>
                </div>

                <div><span>20 comments</span></div>
            </div>
            <div className='flex items-center gap-2'>
                <button
                    className="inline-flex items-center py-2.5 px-4 border-0 focus:outline-none bg-gray-300 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                    <img className='h-5' src={LikeIcon} />
                    <span className='ml-2'>Like</span>
                </button>
                <button
                    onClick={() => setShowComment("flex")}
                    className="inline-flex items-center py-2.5 px-4 border-0 focus:outline-none bg-gray-300 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                    <img className='h-5' src={CommentIcon} />
                    <span className='ml-2'>Comment</span>
                </button>
            </div>

            {/* comment input */}
            <div className={`${showComment} flex-col mt-4 w-full`}>
                <div className='flex w-full'>
                    <AvatarSmall img={Profile} />
                    <input
                        placeholder="Add a comment..."
                        className="rounded pr-8 pl-4 ml-2 w-full dark:bg-slate-700 dark:border-slate-400 border border-text-slate-800 outline-none "
                        type="text"
                    />
                    <button
                        className="dark:disabled:text-slate-400 disabled:text-slate-700 text-blue-500 -ml-8"
                    >
                        <img className='h-5' src={SendIcon} />
                    </button>
                </div>

                <Comment />
            </div>


        </div>
    )
}
