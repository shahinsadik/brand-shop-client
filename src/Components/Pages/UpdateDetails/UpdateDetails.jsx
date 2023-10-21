import React from 'react';
import {useLoaderData } from 'react-router-dom'
const UpdateDetails = () => {
  const singleData = useLoaderData()
  console.log(singleData);
    const handleUpdateDetails =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const carCategory = form.carCategory.value;
        const brand = form.brand.value;
        const updateData = {name, price, description, photo, rating, carCategory, brand};
        
        fetch(`https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/cars/${singleData._id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateData)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)})
    }
    return (
        <div>
             <div
          className="lg:hero lg:min-h-screen"
          style={{
            backgroundImage:
              "url(https://www.topgear.com/sites/default/files/2023/03/TG%20LAMBO230309_0013.jpg?w=1784&h=1004)",
          }}>
          <div  className="hero-overlay bg-opacity-80">
            <div className="  rounded-lg">
              <form onSubmit={handleUpdateDetails} className="w-2/3 mx-auto space-y-2">
                <h2 className="text-center font-bold text-3xl my-10 text-white">
                  Update Details
                </h2>
                <div className="form-control w-full">
                  <label className="input-group input-group-vertical">
                    <span className="bg-black bg-opacity-60 text-white font-semibold">
                      Image Url
                    </span>
                    <input
                      defaultValue={singleData.photo}
                      name="photo"
                      type="text"
                      required
                    
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
                    defaultValue={singleData.name}
                      name="name"
                      type="text"
                      required
                    
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
                        required
                          name="brand"
                          className="select select-bordered w-full bg-opacity-30 hover:bg-opacity-80 ">
                          
                          <option required>Toyota</option>
                          <option>Tesla</option>
                          <option>Ferrari</option>
                          <option>Honda</option>
                          <option>Nissan</option>
                          <option>Mercedes-Benz</option>
                          <option>BMW</option>
                          <option>Jeep</option>
                        </select>
                      </div>
                    </label>
                  </div>

                  <div className="form-control ">
                    <label className="input-group input-group-vertical">
                      <span className="bg-black bg-opacity-60 text-white font-semibold">
                        Car Category
                      </span>
                      <div className="input-group">
                        <select
                          name="carCategory"
                          className="select select-bordered w-full bg-opacity-30 hover:bg-opacity-80 ">
                          
                          <option>Sedan Car</option>
                          <option>Classic Car</option>
                          <option>Luxury Car</option>
                          <option>Electric Car</option>
                          <option>Sports Car</option>
                          <option>Antique Car</option>
                          <option>Hybrid Car</option>
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
                      required
                        defaultValue={singleData.price}
                        name="price"
                        type="text"
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
                      required
                      defaultValue={singleData.rating}
                        name="rating"
                        type="text"                       
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
                    <textarea
                    required
                      defaultValue={singleData.description}
                      name="description"
                      className=" textarea textarea-bordered textarea-lg w-full bg-opacity-30 hover:bg-opacity-80 "></textarea>
                  </label>
                </div>

                <div>
                  <input
                    className="btn mb-10 hover:text-[#331A15] bg-[#d2b48c] w-full  p-2 rounded-lg bg-opacity-30 hover:bg-opacity-80 font-bold text-white"
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateDetails;