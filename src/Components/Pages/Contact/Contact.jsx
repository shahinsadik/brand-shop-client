
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    toast.success("Your message has been submitted");
   }
    return (
        <div className='mx-10 mb-10'>
            <div >
                <h1 className="text-5xl font-bold mt-5 text-black text-center  ">Get In Touch</h1>
                <p className='text-black text-center mt-3 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                 doloremque laudantium, totam rem aperiam,</p>
            </div><Toaster></Toaster>
            <div className="hero min-h-screen rounded-lg mt-5 bg-slate-600">
            
        <div className="grid items-center lg:grid-cols-2 grid-cols-1">
          <div className="">
            <img className="h-full" src="https://static.live.templately.com/woocommerce/2022/01/Group-16957.png" alt="" />
          </div>
          
          <div className="card flex-shrink-0 w-full  max-w-lg ">
            <form
             
              className="card-body  rounded-2xl ">
                <h1 className='text-5xl font-bold text-center text-white mb-10'>Contact Form</h1>
              <div className="md:flex gap-5">
                
                <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your first name"
                  className="input input-bordered w-full"
                  required
                />
                </div>
                <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your last name"
                  className="input input-bordered w-full mt-2"
                  required
                />
                </div>
              </div>
              <div className="form-control">
                
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered"
                  required
                />
                <textarea
                    
                  type="input"
                  name="Message"
                  placeholder="Your Message"
                  className="input input-bordered textarea-lg  w-full mt-2 "
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button onClick={handleSubmit} className="mb-2 btn btn-primary bg-[#6c63ff]">
                  Submit now
                </button>
                <div></div>
                
                <div className="flex gap-4 items-center justify-center mt-2">
                  
                  
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Contact;