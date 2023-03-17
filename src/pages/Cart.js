import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart)

  return (
    <div className="py-5">
      <div className="container">
        <div>
          {cart.length > 0 ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <CartProductCard key={index} index={index} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">Cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
