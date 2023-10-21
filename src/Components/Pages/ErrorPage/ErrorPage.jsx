import React from 'react';
import {Link} from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp)'}}>
            <div className='flex h-screen justify-center items-center'>
            <div>
            <h1 className='text-3xl font-bold text-center'>404 Error</h1>
            <h2 className='mt-5 text-red-700 text-5xl font-black text-center mb-10 '>Page Not Found</h2>
            <Link className='text-center text-3xl text-white font-bold p-2 flex justify-center items-center hover:bg-green-800 bg-red-600 rounded-md' to="/"> Go to Home</Link>
            </div>
        </div>
            
        </div>
    );
};

export default ErrorPage;