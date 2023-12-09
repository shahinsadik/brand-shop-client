// import { useLoaderData } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
  // const LoadedMyCart = useLoaderData();
  const [myCart, setMyCart] = useState([]);

  const {user} = useContext(AuthContext)
  const email= user.email

  // const [carsData, setCarsData] = useState([]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-9x180eunj-shahin-sadiks-projects.vercel.app/my-cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = myCart.filter((item) => item._id !== _id);
            setMyCart(remaining);
          });
      }
    });
  };
console.log(myCart);

  useEffect(() => {
    fetch(
      "https://brand-shop-server-9x180eunj-shahin-sadiks-projects.vercel.app/my-cart"
    )
      .then((response) => response.json())
      .then((data) => {
        const userCart = data.filter((item) => item.email === email);
        setMyCart(userCart);
      });
  }, [email]);

  return (
    <div>
      <div
        className=" lg:hero lg:min-h-screen "
        style={{
          backgroundImage:
            "url(https://casselsgarage.com/wp-content/uploads/GettyImages-518590341-1024x544.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-80">
          <div>
            <h2 className="text-3xl font-bold text-white text-center py-10">
              Your Added Product
            </h2>
          </div>
          <div></div>

          <div className="lg:mx-20 mx-5 mb-10">
          {myCart.length === 0 ? (
  <p className="text-4xl bg-red-600 p-3 font-black text-center text-white">
    Your cart is empty.
  </p>
) : (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
    {myCart.map((cartItem) => (
      <div key={cartItem._id}>
        <div className="bg-base-300 shadow-xl rounded-lg bg-opacity-80">
          <div className="flex gap-4 p-5">
            <div>
              <img
                className="h-32 rounded-lg"
                src={cartItem.details?.photo}
                alt={cartItem.details?.model}
              />
            </div>
            <div className="lg:flex items-center gap-5 justify-center">
              <div className="space-y-1">
                <h3 className="font-bold">Model: {cartItem.details?.name}</h3>
                <p className="font-bold">Brand: {cartItem.details?.brand}</p>
                <p className="text-md font-semibold text-gray-600">
                  Type: {cartItem.details?.brand}
                </p>
                <p className="font-semibold text-gray-600">
                  Price: ${cartItem.details?.price}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(cartItem._id)}
                  className="text-lg font-semibold flex items-center gap-1 hover:bg-black bg-[#ef1d26] px-3 p-1 rounded-lg text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
