
import { useContext, useState } from 'react';
import { AuthContext   } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
const Register = () => {
  const [emailError, setEmailError] = useState("");
  const {crateNewUser, profileUpdate}= useContext(AuthContext)
  const location = useLocation();
  const [error, setError] = useState();
    const navigate = useNavigate();
  const handleSignUp =(e)=>{
    e.preventDefault();
    const form = e.target
    const name =form.name.value
    const photo =form.photo.value
    const email =form.email.value
    const password =form.password.value   
    const register ={name,photo,email, password}
    console.log(register);
    fetch("http://localhost:5000/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(register)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.message);
    })

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
      setError(
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      if (email) {
        crateNewUser(email, password)
          .then(() => {
            toast.success("Sign Up Successfully");
            e.target.reset();
            profileUpdate(name, photo)
              .then(()=>{
                window.location.reload(false)
              })
            
            navigate(location?.state ? location?.state : "/");
            
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              setEmailError("Email is already in use.");
            } else {
              setEmailError("");
            }
          });
      }
    }
  }
  return (
    <div><Toaster/>
      <div className="h-screen bg-[#060d1f] ">
        <div className="grid grid-cols-2 h-full items-center">
          <div className=" mx-5 rounded-lg"  >
            <form onSubmit={handleSignUp} className="w-2/3 mx-auto space-y-2">
              <h2 className="text-center font-bold text-3xl my-5 text-white">
                Sign Up Now
              </h2>
              <div className="form-control w-full">
                <label className="input-group input-group-vertical">
                  <span className="bg-black text-white">Full Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group input-group-vertical">
                  <span className="bg-[#f6bbc6]">Photo Link</span>
                  <input
                    name="photo"
                    type="photo"
                    placeholder="Enter Your Photo URL"
                    className="input input-bordered"
                  />
                </label>
              </div>
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
              {emailError && <p className="text-red-700">{emailError}</p>}
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
              <p className="text-red-700">{error}</p>
              <div>
                <input
                  className="btn mb-10 font-semibold text-[#331A15] bg-[#d2b48c] w-full  p-2 rounded-lg "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
          <div className="">
            <img
              className="h-full"
              src="https://f001.backblazeb2.com/file/BIT-Magazine-Images/1665660010-electric_car_1418790563.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
