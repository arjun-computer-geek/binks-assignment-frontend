import React, { useEffect } from 'react'
import { FullScreenLoader, NewPost, ShowPost } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearError } from '../features/auth/authSlice'
import { getAllPosts } from '../features/post/postSlice'

export const Post = () => {
    const { posts, loading, error } = useSelector(state => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearError())
        }
        dispatch(getAllPosts())
    }, [error, dispatch])

    if (loading) return <FullScreenLoader />
    return (

        <div className='w-full col-span-4 p-8'>
            <NewPost />
            {
                posts?.map(data => <ShowPost key={data._id} data={data} />)
            }
        </div>

    )
}
