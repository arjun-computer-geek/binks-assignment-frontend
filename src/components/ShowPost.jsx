import React, { useEffect, useState } from 'react'
import Profile from '../assets/profile-pic.png'
import LikeIcon from '../assets/like.png'
// import EditIcon from '../assets/edit-icon.png'
import ThreeDotIcon from '../assets/three-dot.png'
import CommentIcon from '../assets/comment.png'
import SendIcon from '../assets/send.png'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import AvatarSmall from './AvatarSmall'
import Comment from './Comment'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import EditPostModal from './EditPostModal'

const ShowPost = ({ data, edit, postDeleteHandler, editPostHandler }) => {
    const [showComment, setShowComment] = useState("hidden");
    const [threeDot, setThreeDot] = useState(false)
    const { user } = useSelector(state => state.auth)
    const [numOfLikes, setNumOfLikes] = useState(data?.likes?.length);
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState("")
    const [editShowPostModal, setEditShowPostModal] = useState(false)

    useEffect(() => {
        getComments()
    }, [])
    const getComments = async () => {
        try {
            const res = await axios.get(`/api/v1/comments/${data?._id}`)
            setComments(res.data.comments)
        } catch (error) {
            console.log(error)
        }
    }

    const createComment = async () => {
        try {
            const res = await axios.post(`/api/v1/comment/${data?._id}`, { description: commentInput })
            if (res.data.success) {
                toast.success('Comment added successfully')
                setComments(prev => [{ createdAt: Date.now(), description: commentInput, user: user }, ...prev])
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        setCommentInput('')
    }

    const likeHandler = async () => {
        try {
            const res = await axios.get(`/api/v1/post/like/${data?._id}`);
            toast.success(res.data.message);
            setNumOfLikes(res.data.likes);
        } catch (error) {
            console(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }





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
                    <span className='ml-2'>{numOfLikes} likes</span>
                </div>

                <div><span>{comments.length} comments</span></div>

                {edit && <div className='relative'><button
                    className=" relative "
                    onClick={() => setThreeDot(prev => !prev)}
                >
                    <img className='h-5 ' src={ThreeDotIcon} />
                </button>

                    <div className={`absolute right-0  w-48 bg-white rounded-md shadow-lg z-10 ${!threeDot && 'hidden'}`}>
                        <ul className="py-2 bg-gray-50">
                            <li onClick={() => { setThreeDot(false); setEditShowPostModal(true) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                            <li onClick={() => { setThreeDot(false); postDeleteHandler(data._id) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                        </ul>
                    </div>
                </div>
                }

            </div>

            {!edit && <div className='flex items-center gap-2'>
                <button
                    onClick={likeHandler}
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
            </div>}


            {/* comment input */}
            <div className={`${showComment} flex-col mt-4 w-full`}>
                <div className='flex w-full'>
                    <AvatarSmall img={Profile} />
                    <input
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        placeholder="Add a comment..."
                        className="rounded pr-8 pl-4 ml-2 w-full dark:bg-slate-700 dark:border-slate-400 border border-text-slate-800 outline-none "
                        type="text"
                    />
                    <button
                        onClick={createComment}
                        className="dark:disabled:text-slate-400 disabled:text-slate-700 text-blue-500 -ml-8"
                    >
                        <img className='h-5' src={SendIcon} />
                    </button>
                </div>
                {comments.map((comment, i) => <Comment key={i} data={comment} />)}
            </div>
            {
                editShowPostModal &&
                <EditPostModal
                    id={data._id}
                    content={data.description}
                    setEditShowPostModal={setEditShowPostModal}
                    editPostHandler={editPostHandler}
                />
            }

        </div>
    )
}
export default ShowPost