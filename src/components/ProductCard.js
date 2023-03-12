import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";
import ProductRatingStar from "./ProductRatingStar";

const ProductCard = ({ item }) => {

  const {title,price,image,description,rating:{rate,count}

  } = item;

  const dispatch = useDispatch()
 



  
  return (
    <div className="col-12 col-md-4, col-lg-3">
      <div className="card product-card p-3">
        <div className="product-image">
          <img src={image} alt="" />
        </div>
        <h5 className="mt-3">{title}</h5>
        <p>{description.slice(0, 100)}</p>

        <p className="d-flex align-items-center gap-1">
          <span>Rating: </span> <ProductRatingStar star={rate} />
        </p>
        <h5>Price : ${price}</h5>

        <button className="btn btn-primary mt-3" onClick={()=> dispatch({type: ADD_TO_CART, payload: item})}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
