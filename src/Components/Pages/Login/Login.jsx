import React from "react";
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import  {AuthContext}  from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const {signInUser} = useContext(AuthContext)

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target
    const email =form.email.value
    const password =form.password.value
    const login ={email, password}
    console.log(login);
    signInUser(email, password)
    .then(()=>{
      toast.success('Login Successfully')
    })
    .catch(()=>{
      toast.error("Invalid email or password");
    })
  }
  return (
    <div className='h-screen bg-[#010101] '> <Toaster/>
      <div className='grid grid-cols-2 h-full items-center'>
      <div className='bg-[#d20324] mx-5 rounded-lg'>
          <form onSubmit={handleLogin} className="w-2/3 mx-auto space-y-2">
            <h2 className='text-center font-bold text-3xl my-5 text-white'>Please Login Now</h2>
            <div className="form-control w-full">
              <label className="input-group input-group-vertical">
                <span className="bg-[#f6bbc6]">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className="bg-[#d2b48c]">Password</span>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="mb-10">
              <input
                className=" font-semibold text-[#331A15] bg-[#d2b48c] w-full btn p-2 rounded-l-lg "
                type="submit"
                value="Login"
              />
            <div className="mb-10">Login With google</div>
            </div>
          </form>
        </div>
        <div className=''>
            <img className='h-full' src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-car-color-light-supercar-image_2205399.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
