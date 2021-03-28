import React from "react";
import "./Product.css";
import counter from "./atoms";
import { useRecoilState } from "recoil";

function Product({ image, title, price, id, description }) {
  const [counters, setCounters] = useRecoilState(counter);
  return (
    <div className="product">
      <img src={image} alt="" className="product__image" />
      <h4 className="product__title">{title}</h4>
      <p className="product__price">{price}</p>
      <p className="product__description">{description}</p>
      <button
        className="product__button"
        onClick={() => {
          setCounters(counters + 1);
          console.log("counter updated!", counters);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
