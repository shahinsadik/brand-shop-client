import React from "react";
import {useLoaderData} from 'react-router-dom'
import CarCard from "../CarCard/CarCard";
const Home = () => {
  const carsData = useLoaderData();
//   console.log(carsData);
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 grid grid-cols-2 gap-3 ">
            {
                carsData.map(car =><div key={car._id}>
                    <CarCard car={car}></CarCard>
                </div>)
            }
          </div>
        <div>
            Our Brand</div>
      </div>
        </div >
    </div>
  );
};

export default Home;
