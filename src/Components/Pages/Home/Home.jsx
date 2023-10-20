import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Brand from '../Brand/Brand'
const Home = () => {
  const carsData = useLoaderData().slice(0, 6);
  
  return (
    <div>
      <div >
        <img  className="w-full " src="https://www.tuvsud.com/-/media/regions/in/images/industries/mobility-and-automotive/ss_764866978_mobility-and-automotive.jpg?extension=webp&h=330&w=1280&mw=1280&la=en-IN&hash=0B96F9ACBED0F65061B827E29340E79C" alt="" />
      </div>
        <Brand></Brand>
      <div className="">
        <div className="">

        </div>
        <div className="mt-7">
          <div>
            <h1 className="text-4xl p-2 mb-5 font-black text-center text-[#ef1d26]">
              Our Latest Car
            </h1>
          </div>
          <div className="mx-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {carsData.map((car) => (
              <div className="" key={car._id}>
                <CarCard car={car}></CarCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
