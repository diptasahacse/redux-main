import React from "react";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const subTotal = cart.reduce(
    (total, currentValue, currentIndex, arr) =>
      currentValue.quantity * currentValue.price + total,
    0
  );
  const shippingFee = (subTotal * 2)/100;
  console.log(subTotal);
  return (
    <div className="cart-details card">
      <div className="card-header">
        <h5>Cart Total</h5>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <strong>Subtotal</strong>
          <b>${subTotal.toFixed(1)}</b>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <strong>Shipping</strong>
          <b>${shippingFee.toFixed(1)}</b>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <strong>Total</strong>
          <b>${(shippingFee+subTotal).toFixed(1)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
