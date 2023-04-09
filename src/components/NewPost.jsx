import React, { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar'
import Profile from '../assets/profile-pic.png'
import ImgIcon from '../assets/img-icon.png'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';
import './NewPost.css'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearError } from '../features/auth/authSlice'
import { createPost } from '../features/post/postSlice'

const NewPost = () => {
    const inputReference = useRef(null)
    const [text, setText] = useState("");
    const { loading, error } = useSelector(state => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
        inputReference.current.focus();
    }, []);

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearError())
        }
    }, [error, dispatch])

    const postHandler = () => {
        dispatch(createPost({ description: text }))
    }
    return (
        <div className='bg-white rounded'>
            <div className="w-full p-2 flex items-start dark:text-white">
                <Avatar img={Profile} />
                <div className='w-full m-2 border border-gray-200'>
                    <ReactQuill
                        theme="bubble"
                        value={text}
                        className="w-full"
                        onChange={setText}
                        placeholder={"What's on your mind?"}
                        ref={inputReference}
                    />
                </div>
            </div>
            <div className='flex items-center p-2 m-2 justify-between '>
                <button
                    className="inline-flex items-center h-10 mx-16 py-1"
                >
                    <img className='h-full w-full' src={ImgIcon} />
                </button>
                <button
                    onClick={postHandler}
                    disabled={text.length === 0 || text === "<p><br></p>" || loading}
                    className="inline-flex items-center py-2.5 px-4 border-0 focus:outline-none bg-blue-300 hover:bg-blue-200 rounded text-base mt-4 md:mt-0"
                >
                    Post
                </button>
            </div>
        </div>
    )
}
export default NewPost