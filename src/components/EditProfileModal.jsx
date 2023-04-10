import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const EditProfileModal = () => {
    const [editModal, setEditModal] = useState(false);
    const [formData, setFormData] = useState({})
    const { user, loading, error } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        setFormData(user)
    }, [user])

    const onChangeHandler = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile(formData))
    }
    return (<>
        <div className="flex justify-end mt-2 ">
            <button onClick={() => setEditModal(true)} className="flex items-center  bg-blue-300 hover:bg-blue-200 text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Edit Profile
            </button>
        </div>
        {editModal &&
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className=" absolute inset-0 bg-gray-900 opacity-50"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen bg-red-700"></span>&#8203;

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white ">
                            <div className="bg-gray-100 px-4 py-3">
                                <button onClick={() => setEditModal(false)} type="button" class="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2>Edit Profile</h2>
                            </div>
                            <div className="w-full sm:flex sm:items-center">
                                <form className="w-full max-w-2xl px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            name='name'
                                            onChange={onChangeHandler}
                                            value={formData.name}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            name='username'
                                            onChange={onChangeHandler}
                                            value={formData.username}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="bio"
                                        >
                                            Bio
                                        </label>
                                        <input
                                            name='bio'
                                            onChange={onChangeHandler}
                                            value={formData.bio}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="bio"
                                            type="text"
                                            placeholder="Bio"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            name='email'
                                            onChange={onChangeHandler}
                                            value={formData.email}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    {/* <div className="mb-6">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        value={formData.password}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div> */}
                                    <div className="flex items-center justify-between">
                                        <button
                                            disabled={loading}
                                            className=" flex items-center bg-blue-300 hover:hover:bg-blue-200 text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            {loading && <Spinner />}
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

    </>
    )
}

export default EditProfileModal