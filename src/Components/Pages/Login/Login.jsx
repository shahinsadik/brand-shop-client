import React from "react";
// import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const login = { email, password };
    console.log(login);
    signInUser(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };
  return (
    <div>
      {" "}
      <Toaster />
      <div>
        <div>
          <div
            className="lg:hero lg:min-h-screen"
            style={{
              backgroundImage:
                "url(https://casselsgarage.com/wp-content/uploads/GettyImages-518590341-1024x544.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-80">
              <div className="  rounded-lg">
                <form
                  onSubmit={handleLogin}
                  className="w-2/3 mx-auto space-y-2">
                  <h2 className="text-center font-bold text-3xl my-5 text-white">
                    Please Login Now
                  </h2>
                  <div className="form-control w-full">
                    <label className="input-group input-group-vertical">
                      <span className="bg-black bg-opacity-60 text-white font-semibold">Email</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        className="input input-bordered bg-opacity-30 hover:bg-opacity-80 font-semibold"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group input-group-vertical">
                      <span className="bg-black bg-opacity-60 text-white font-semibold">Password</span>
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        className="input input-bordered bg-opacity-30 hover:bg-opacity-80 font-semibold"
                      />
                    </label>
                  </div>
                  <div className="mb-10">
                    <input
                      className=" btn mb-10 hover:text-[#331A15] bg-[#d2b48c] w-full  p-2 rounded-lg bg-opacity-30 hover:bg-opacity-80 font-bold text-white duration-1000 "
                      type="submit"
                      value="Login"
                    />
                    <div className="mb-10">Login With google</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
