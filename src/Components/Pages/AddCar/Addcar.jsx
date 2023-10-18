import React from "react";

const Addcar = () => {
  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const carCategory = form.carCategory.value;
    const brand = form.brand.value;
    console.log(name, price, description, photo, rating, carCategory, brand);
  };
  return (
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
              <form onSubmit={handleAddCar} className="w-2/3 mx-auto space-y-2">
                <h2 className="text-center font-bold text-3xl my-10 text-white">
                  Add your Car
                </h2>
                <div className="form-control w-full">
                  <label className="input-group input-group-vertical">
                    <span className="bg-black bg-opacity-60 text-white font-semibold">
                      Image Url
                    </span>
                    <input
                      name="photo"
                      type="text"
                      placeholder="Enter Image URL"
                      className="input input-bordered bg-opacity-30 hover:bg-opacity-80 text-white "
                    />
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="input-group input-group-vertical">
                    <span className="bg-black bg-opacity-60 text-white font-semibold">
                      Model
                    </span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter Model Name"
                      className="input input-bordered bg-opacity-30 hover:bg-opacity-80 "
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="form-control">
                    <label className="input-group input-group-vertical">
                      <span className="bg-black bg-opacity-60 text-white font-semibold">
                        Brand Name
                      </span>
                      <div className="input-group">
                        <select
                          name="brand"
                          className="select select-bordered w-full bg-opacity-30 hover:bg-opacity-80 ">
                          
                          <option >BMW</option>
                          <option >Toyota</option>
                          <option >Tesla</option>
                          <option >Ferrari</option>
                          <option >Nissan</option>
                          <option>Honda</option>
                        </select>
                      </div>
                    </label>
                  </div>

                  <div className="form-control ">
                    <label className="input-group input-group-vertical">
                      <span className="bg-black bg-opacity-60 text-white font-semibold"> Category
                      </span>
                      <div className="input-group">
                        <select
                          name="carCategory"
                          className="select select-bordered w-full bg-opacity-30 hover:bg-opacity-80 ">
                          
                          <option >Sports Car</option>
                          <option >Sedan Car</option>
                          <option >Classic Car</option>
                          <option >Luxury Car</option>
                          <option >Electric Car</option>
                        </select>
                      </div>
                    </label>
                  </div>
                  <div className="form-control ">
                    <label className="input-group input-group-vertical">
                      <span className="font-semibold bg-black bg-opacity-60 text-white">
                        Price
                      </span>
                      <input
                        name="price"
                        type="text"
                        placeholder="$ Enter price"
                        className="input input-bordered bg-opacity-30 hover:bg-opacity-80 font-semibold"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group input-group-vertical">
                      <span className=" bg-black bg-opacity-60 text-white font-semibold">
                        Rating
                      </span>
                      <input
                        name="rating"
                        type="number"
                        placeholder="Enter rating"
                        className="input input-bordered bg-opacity-30 hover:bg-opacity-80 font-semibold"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="input-group input-group-vertical ">
                    <span className="bg-black bg-opacity-60 text-white font-semibold">
                      Short Description
                    </span>
                    {/* <input 
                        name="description"
                        type="text"
                        placeholder="Enter Description"
                        className="input textarea textarea-bordered textarea-lg w-full h-10" 
                      /> */}
                    <textarea
                      placeholder="Enter Description"
                      name="description"
                      className=" textarea textarea-bordered textarea-lg w-full bg-opacity-30 hover:bg-opacity-80 "></textarea>
                  </label>
                </div>

                <div>
                  <input
                    className="btn mb-10 hover:text-[#331A15] bg-[#d2b48c] w-full  p-2 rounded-lg bg-opacity-30 hover:bg-opacity-80 font-bold text-white"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcar;
