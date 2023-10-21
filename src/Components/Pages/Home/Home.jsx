import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Brand from "../Brand/Brand";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const carsData = useLoaderData().slice(0, 6);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div></div>
      <div data-aos="fade-zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <img
          className="w-full "
          src="https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/300230656_213039227715716_269826414746236093_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nx3va96JKI0AX-wWvCJ&_nc_ht=scontent.frjh3-1.fna&oh=00_AfCCiEjvfF6iIXf9lLTnYnyCa2bQGOa5xf-CzFExMB3s4Q&oe=6538A6D5"
          alt=""
        />
      </div>
      <Brand></Brand>
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
