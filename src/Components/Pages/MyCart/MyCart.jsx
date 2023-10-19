import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const MyCart = () => {
  const myCart = useLoaderData();
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => response.json())
      .then((data) => {
        setCarsData(data);
      });
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      
      <div>
        <h3>Cart Items:</h3>
        {myCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {myCart.map((cartItem) => {
              const matchingCar = carsData.find((car) => car._id === cartItem.
              productId);
              if (matchingCar) {
                return (
                  <li key={cartItem._id}>
                    <p>ID: {cartItem._id}</p>
                    <p>Model: {matchingCar.name}</p>
                    <p>Price: $ {matchingCar.price}</p>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyCart;
