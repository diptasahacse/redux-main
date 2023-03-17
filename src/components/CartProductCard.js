import React from "react";
import { useDispatch } from "react-redux";
import { quantityDecrement, quantityIncrement } from "../redux/actionCreators/cartAction";
import { removeFromCart } from "../redux/actionCreators/productsActions";

const CartProductCard = ({ product, index }) => {
  const { image, title, quantity, price } = product;

  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <div className="d-flex align-items-center gap-3">
          <img className="product-cart-image" src={image} alt="" />
          <h6>{title.slice(0, 20)}...</h6>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div className="d-flex justify-content-between align-items-center">
          <button className="cart-quantity-btn"  onClick={()=> dispatch(quantityDecrement(product))}>-</button>
          <p className="m-0">{quantity}</p>
          <button className="cart-quantity-btn"  onClick={()=> dispatch(quantityIncrement(product))}>+</button>
        </div>
      </td>
      <td>${quantity * price}</td>
      <td>
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="btn btn-sm btn-danger"
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default CartProductCard;
