import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Brand from "../Brand/Brand";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const carsData = useLoaderData().slice(0, 6);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div>
      <Brand></Brand>
      </div>
      
      <div className="">
        <div className=""></div>
        <div className="mt-7">
          <div>
            <h1 className=" text-4xl p-2 mb-5 font-black text-center text-[#ef1d26]">
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
          <div>
            <div>
              <div
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="2000"
                className="hero  bg-base-200 my-10"
                style={{
                  backgroundImage:
                    "url(https://wallpapercave.com/dwp2x/wp4670591.jpg)",
                }}>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  className="my-28">
                  <h1 className="text-5xl text-left font-bold hover:text-white  text-yellow-400">
                    FIND YOUR DREAM CAR
                  </h1>
                  <button className=" p-3 mx-5 rounded-xl bg-black text-white font-black my-5">
                    Find Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
