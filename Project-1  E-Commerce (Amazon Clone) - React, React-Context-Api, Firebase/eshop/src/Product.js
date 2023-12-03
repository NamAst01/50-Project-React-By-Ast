import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p className="product_title">{title} </p>
          <p className="product_price">${price}</p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className="product_rating">A</p>
              ))}
          </div>
          <img src={image} alt="productimage" className="product_image" />
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
