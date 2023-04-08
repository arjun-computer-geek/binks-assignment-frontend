import React from 'react'
import { NewPost, ShowPost } from '../components'

export const Post = () => {
    return (
        <div className='w-full col-span-4 p-8'>
            <NewPost />
            <ShowPost />
            <ShowPost />
            <ShowPost />
        </div>
    )
}
