import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const MyCart = () => {
  const LoadedMyCart = useLoaderData();
  const [myCart, setMyCart] = useState(LoadedMyCart);
  const [carsData, setCarsData] = useState([]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/my-cart/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const remaining = myCart.filter((item) => item._id !== _id);
        setMyCart(remaining)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => response.json())
      .then((data) => {
        setCarsData(data);
      });
  }, []);

  return (
    <div>
      <div>
        <div
          className=" lg:hero lg:min-h-screen"
          style={{
            backgroundImage:
              "url(https://casselsgarage.com/wp-content/uploads/GettyImages-518590341-1024x544.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-80">

            <h2 className="text-3xl font-bold text-white text-center py-10">
              Your Added Product
            </h2>
          </div>

          <div className="lg:mx-20 mx-5">
            {myCart.length === 0 ? (
              <p className="text-4xl bg-red-600 p-3 font-black text-center text-white">Your cart is empty.</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                {myCart.map((cartItem) => {
                  const matchingCar = carsData.find(
                    (car) => car._id === cartItem.productId
                  );
                  if (matchingCar) {
                    return (
                      <div key={matchingCar._id}>
                        <div className="bg-base-300 shadow-xl rounded-lg bg-opacity-80">
                          <div className="flex gap-4 p-5">
                            <div className=" ">
                              <img
                                className="h-32 rounded-lg"
                                src={matchingCar.photo}
                                alt=""
                              />
                            </div>
                            <div className="flex items-center gap-5 justify-center">
                              <div className="space-y-1">
                                <h3 className=" font-bold">
                                  Model: {matchingCar.name}
                                </h3>
                                <p className=" font-bold">
                                  Brand: {matchingCar.brand}
                                </p>
                                <p className="text-md font-semibold text-gray-600">
                                  Type: {matchingCar.carCategory}
                                </p>
                                <p className=" font-semibold text-gray-600">
                                  Price: ${matchingCar.price}
                                </p>
                              </div>
                              <div>
                                <button
                                  onClick={() => handleDelete(cartItem._id)}
                                  className="text-lg font-semibold flex items-center gap-1 hover:bg-black bg-[#ef1d26] px-3 p-1 rounded-lg text-white">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
