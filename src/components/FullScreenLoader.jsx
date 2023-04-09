import React from "react";

export const FullScreenLoader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-white opacity-75">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
    );
};

