import React, { useEffect } from 'react'
import FullScreenLoader from '../components/FullScreenLoader'
import NewPost from '../components/NewPost'
import ShowPost from '../components/ShowPost'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearError } from '../features/auth/authSlice'
import { getAllPosts } from '../features/post/postSlice'

const Post = () => {
    const { posts, loading, error } = useSelector(state => state.post)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearError())
        }
    }, [error, dispatch])

    if (loading) return <FullScreenLoader />
    return (

        <div className='w-full col-start-2 col-span-4 p-8'>
            <NewPost />
            {
                posts?.map(data => <ShowPost key={data._id} data={data} />)
            }
        </div>

    )
}
export default Post;