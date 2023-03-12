import React from "react";
import ProductRatingStar from "./ProductRatingStar";

const ProductCard = ({ item }) => {
 



  
  return (
    <div className="col-12 col-md-4, col-lg-3">
      <div className="card product-card p-3">
        <div className="product-image">
          <img src='' alt="" />
        </div>
        <h5 className="mt-3">a</h5>
        <p>a</p>

        <p className="d-flex align-items-center gap-1">
          <span>Rating: </span> <ProductRatingStar star={1} />
        </p>
        <h5>Price : $5</h5>

        <button className="btn btn-primary mt-3" >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
