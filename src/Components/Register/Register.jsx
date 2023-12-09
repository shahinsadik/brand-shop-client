
import { useContext, useState } from 'react';
import { AuthContext   } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation,Link } from "react-router-dom";
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
    fetch("https://brand-shop-server-9x180eunj-shahin-sadiks-projects.vercel.app/users",{
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
  <div>
        <div
          className="lg:hero lg:min-h-screen"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/theme-vessel-items/checking-sites/autocar-html/HTML/main/img/banner/img-2.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-80">
            <div className="  rounded-lg">
            <form onSubmit={handleSignUp} className="w-2/3 mx-auto space-y-2">
              <h2 className="text-center font-bold text-3xl my-5 text-white">
                Sign Up Now
              </h2>
              <div className="form-control w-full">
                <label className="input-group input-group-vertical">
                  <span className="bg-black bg-opacity-60 text-white font-semibold">Full Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="input input-bordered bg-opacity-30 hover:bg-opacity-80"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group input-group-vertical">
                  <span className="bg-black bg-opacity-60 text-white font-semibold">Photo Link</span>
                  <input
                    name="photo"
                    type="photo"
                    placeholder="Enter Your Photo URL"
                    className="input input-bordered bg-opacity-30 hover:bg-opacity-80"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group input-group-vertical">
                  <span className="bg-black bg-opacity-60 text-white font-semibold">Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered bg-opacity-30 hover:bg-opacity-80"
                  />
                </label>
              </div>
              {emailError && <p className="text-red-700">{emailError}</p>}
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-black bg-opacity-60 text-white font-semibold">Password</span>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="input input-bordered bg-opacity-30 hover:bg-opacity-80"
                  />
                </label>
              </div>
              <p className="text-red-700">{error}</p>
              <div>
                <input
                  className="btn duration-1000 mb-10 hover:text-[#331A15] bg-[#d2b48c] w-full  p-2 rounded-lg bg-opacity-30 hover:bg-opacity-80 font-bold text-white "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div>
                  <p className="my-2 font-semibold text-center text-white">  Have An Account ?<Link to="/login" className="text-center font-bold text-green-700"> Login Now</Link></p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};


export default Register;
