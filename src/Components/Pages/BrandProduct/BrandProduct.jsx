import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BrandProduct = () => {
  const [newData, setNewData] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/Brands/${name}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setNewData(data);
      });
  }, []);

  return (
    <div>
      <div>
        <div></div>

        <div>
          {newData.length === 0 ? (
            <p className="text-4xl bg-red-600 p-3 font-black text-center text-white">
              Brand is empty.
            </p>
          ) : (
            <div>
              <div>
                <div>
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                      <img
                        className="h-96 w-full object-cover"
                        src="https://t3.ftcdn.net/jpg/06/09/87/48/240_F_609874803_boIlmkyVD3R2Ui0qE8AiIcdfDBPzvez7.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-96 w-full object-cover"
                        src="https://t4.ftcdn.net/jpg/02/82/00/75/240_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-96 w-full object-cover"
                        src="https://as1.ftcdn.net/v2/jpg/05/82/18/10/1000_F_582181092_x8TG5gBpvS9F8N4uEyNtikCndJc7oPWl.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-96 w-full object-cover"
                        src="https://t3.ftcdn.net/jpg/04/79/02/02/240_F_479020258_8qnUoQvBFtY5034IczymXkjmAkhSxKdk.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mx-5">
              {newData.map((data) => (
                <div key={data._id}>
                  <div className=" my-5">
                    <div className="bg-base-300 shadow-xl rounded-lg bg-opacity-80">
                      <div className="flex gap-4 p-5">
                        <div className=" ">
                          <img
                            className="h-32 rounded-lg"
                            src={data.photo}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <div className="space-y-1">
                            <h3 className=" font-bold">Model: {data.name}</h3>
                            <p className=" font-bold">Brand: {data.brand}</p>
                            <p className="text-md font-semibold text-gray-600">
                              Type: {data.carCategory}
                            </p>
                            <p className=" font-semibold text-gray-600">
                              Price: ${data.price}
                            </p>
                          </div>
                          <div>
                            <Link to={`/update/${data._id}`}>
                              <button className="text-lg font-semibold flex items-center gap-1 hover:bg-black bg-[#ef1d26] px-3 p-1 rounded-lg text-white">
                                Update
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
