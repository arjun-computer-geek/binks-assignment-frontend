import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, login } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("Welcome Back")
            navigate('/')
        }
        if (error) {
            toast.error(error);
            dispatch(clearError());
        }
    }, [dispatch, error, isAuthenticated])

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login({ email: emailRef.current.value, password: passwordRef.current.value }))
    }
    return (
        <div className="grid h-screen place-items-center">
            <div className='flex items-center justify-between gap-2'>
                <h1 className='text-3xl'>Welcome Back to</h1>
                <img src={Logo} />
                <h1 className='text-3xl'>Social</h1>
            </div>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email or Username
                        </label>
                        <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email or Username" required={true} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input ref={passwordRef} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required={true} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={loading}
                            className=" flex items-center bg-blue-300 hover:hover:bg-blue-200 text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {loading && <Spinner />}

                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center mt-5">
                        <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Don't have and account ?
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
export default Login