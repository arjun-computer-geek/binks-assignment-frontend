import React, { useEffect, useState } from 'react'
import NavSidebar from '../layouts/NavSidebar'
import ShowPost from '../components/ShowPost'
import axios from 'axios';
import FullScreenLoader from '../components/FullScreenLoader';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getUserPosts();
    }, [])
    const getUserPosts = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/api/v1/my/posts');
            setUserPosts(data.posts)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const postDeleteHandler = async (id) => {
        const rmainingPost = userPosts.filter(ele => ele._id !== id);
        setUserPosts(rmainingPost)
        try {
            const res = await axios.delete(`/api/v1/my/post/delete/${id}`);
            console.log(res)
            toast.success(res.data.message);
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }

    const editPostHandler = async (id, description) => {
        var result = userPosts.map(ele => ele._id === id ? { ...ele, description: description } : ele);
        setUserPosts(result);
        try {
            const { data } = await axios.put(`/api/v1/my/post/edit/${id}`, { description: description });
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error.response.data.message);
        }
    }
    return (
        <NavSidebar>
            {loading ? <FullScreenLoader /> : <div className='w-full col-start-2 col-span-4 p-8'>
                <h2 className='text-3xl'>Your Posts </h2>
                {userPosts?.map((data, i) => <ShowPost data={data} key={i} edit={true} postDeleteHandler={postDeleteHandler} editPostHandler={editPostHandler} />)}
            </div>}


        </NavSidebar>
    )
}

export default Dashboard