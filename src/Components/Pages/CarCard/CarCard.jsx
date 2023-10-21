import {useEffect} from "react";
import {Link} from 'react-router-dom'
import { AiTwotoneStar, AiFillEye } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarCard = ({ car }) => {
  const { photo, brand, rating, name, carCategory, price, _id } = car;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="">
        <div
        
        className="bg-base-100 shadow-xl rounded-lg p-2">
          <div data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="2000">
          <img className="rounded-xl h-60 w-full " src={photo} alt="" />
          </div>
          <div className="flex justify-between ">
            <h3 className=" font-semibold ">{brand}</h3>
            <div className="text-orange-600 flex items-center gap-1">
            <AiTwotoneStar/>
            <p className=" font-semibold"> {rating}</p>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-bold ">{name}</h2>
            <p className=" font-semibold">{carCategory}</p>
          </div>{" "}
          <hr />
          <div className="flex justify-between mb-2 mt-3">
            <p className="text-xl font-bold text-[#ef1d26]">$ {price}</p>
            <Link to={`/details/${_id}`}><button className="text-lg font-semibold flex items-center gap-1 hover:bg-black bg-[#ef1d26] px-3 p-1 rounded-lg text-white"><AiFillEye/>
              Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
