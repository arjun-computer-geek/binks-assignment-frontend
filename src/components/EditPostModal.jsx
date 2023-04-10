import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import Avatar from "./Avatar";
import Profile from "../assets/profile-pic.png";
import "./NewPost.css";

const EditPostModal = ({ setEditShowPostModal, content, editPostHandler, id }) => {
    const inputReference = useRef(null);
    const [text, setText] = useState(content);
    console.log(text, "hey")
    return (
        <>
            <div className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className=" absolute inset-0 bg-gray-900 opacity-50"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen bg-red-700"></span>&#8203;

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white ">
                            <div className="bg-gray-100 px-4 py-3">
                                <button onClick={() => setEditShowPostModal(false)} type="button" className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h2>Edit Post</h2>
                            </div>
                            <div className="w-full  h-[80vh] items-center">
                                <div className=" flex items-start h-[70vh] p-5">
                                    <Avatar img={Profile} />
                                    <div className="w-full m-2 border border-gray-200">
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

                                <button
                                    onClick={() => { setEditShowPostModal(false); editPostHandler(id, text) }}
                                    className="inline-flex items-center m-2 py-2.5 px-4 border-0 focus:outline-none bg-blue-300 hover:bg-blue-200 rounded text-base mt-4 md:mt-0"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditPostModal;


