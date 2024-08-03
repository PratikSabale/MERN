import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const name = location.state;
  console.log("info", location.state);
  return (
    <div>
      <div>Product</div>
      <div>{location.state}</div>
      <div>{name}</div>
    </div>
  );
}

export default Product;
