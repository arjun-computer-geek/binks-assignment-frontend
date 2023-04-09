import React, { useEffect, useRef } from 'react'
import Logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearError, signup } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Signup = () => {
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emaiRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, isAuthenticated, error } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            toast.success('Welcome to the Binks Social')
            navigate('/')
        }
        if (error) {
            toast.error(error);
            dispatch(clearError())
        }
    }, [dispatch, error, isAuthenticated])
    const signupHandler = (e) => {
        e.preventDefault();
        dispatch(signup({ name: nameRef.current.value, email: emaiRef.current.value, password: passwordRef.current.value, username: usernameRef.current.value }))
    }
    return (
        <div className="grid h-screen place-items-center overflow-y-auto">
            <div className='flex items-center justify-between gap-2'>
                <h1 className='text-3xl'>Welcome to</h1>
                <img src={Logo} />
                <h1 className='text-3xl'>Social</h1>
            </div>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={signupHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input required={true} ref={nameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input required={true} ref={usernameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input required={true} ref={emaiRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input required={true} ref={passwordRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={loading} className=" flex items-center bg-blue-300 hover:hover:bg-blue-200 text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {loading && <Spinner />}
                            Sign Up
                        </button>
                    </div>
                    <div className="flex items-center mt-5">
                        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Already have an account ?
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 Binks. All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Signup