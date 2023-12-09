import {useContext} from "react";
import { useLoaderData, useParams,  } from "react-router-dom";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AiTwotoneStar, AiOutlineShoppingCart } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Details = () => {
  const {user} =useContext(AuthContext)
  console.log(user.email);
  const email = user.email
  
  
  const data = useLoaderData();
  const { id } = useParams();
  const details = data.find((details) => details._id === id);
  if (!details) {
    return <div>This car is not found...</div>;
  }
  
  console.log(details);
  const handleAddCart = () => {
    const dataToAddToCart = {
        
        details,
        email
        

    };
    console.log(dataToAddToCart);
    fetch("https://brand-shop-server-9x180eunj-shahin-sadiks-projects.vercel.app/my-cart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(dataToAddToCart)
    })
    .then(res=>res.json())
    .then(()=>{
      toast.success("Successfully add to cart");
    })
}
  return (
    <div className="my-10"><Toaster></Toaster>
      <div className="mx-5">
        <div  className=" p-2 ">
          <img className="w-full " src={details.photo} alt="" />
          <div className="flex justify-between mb-2 mt-2">
            <h2 className="text-2xl font-bold ">Model: {details.name}</h2>
            <div className="text-orange-600 flex items-center gap-1">
              <AiTwotoneStar></AiTwotoneStar>
              <p className=" font-semibold"> {details.rating}</p>
            </div>
          </div>{" "}
          <div className="flex justify-between my-2">
            <h3 className=" font-bold text-2xl">Brand: {details.brand}</h3>
            <p className=" font-bold text-xl">Type: {details.carCategory}</p>
          </div>
          <hr />
          <div className="flex justify-between mb-5 mt-3">
            <p className="text-2xl font-bold text-[#ef1d26]">
              Price: $ {details.price}
            </p>
            <Link>
              <button onClick={handleAddCart} className="text-lg font-semibold flex items-center gap-1 hover:bg-black bg-[#ef1d26] px-3 p-1 rounded-lg text-white">
                <AiOutlineShoppingCart />
                Add to Cart
              </button>
            </Link>
          </div>{" "}
          <hr />
          <div className="border p-2">
            <p className="text-3xl text-center font-bold mb-4 underline">
              Specification
            </p>
            <p className=" font-bold text-gray-600"> $ {details.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
