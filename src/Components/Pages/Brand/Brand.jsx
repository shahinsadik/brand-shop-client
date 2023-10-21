import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/brand")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h2 className="text-[#ef1d26] text-center font-black text-4xl my-5 ">
        Our Trusted Brand
      </h2>
      <div className="mx-5">
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-5">
          {brands.map((brand) => (
            <div key={brand._id} className="">
              <div className="mb-2 ">
                <Link to={`brand/${brand.name}`}>
                  <div className="bg-zinc-400 hover:bg-slate-600 shadow-xl p-5 rounded-lg">
                    <div data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                      className="flex  items-center justify-center">
                      <img className="h-16 " src={brand.image} alt="" />
                    </div>
                    <div 
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <h2 className="lg:text-5xl text-xl mt-2 text-center font-black hover:text-white ">
                      {brand.name}
                    </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
