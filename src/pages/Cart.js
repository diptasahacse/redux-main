import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row g-3">
          {cart.length > 0 ? (
            cart.map((item, index) => <ProductCard key={index} item={item} />)
          ) : (
            <div className="text-center">Enpty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
