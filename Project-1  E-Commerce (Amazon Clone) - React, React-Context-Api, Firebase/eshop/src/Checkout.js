import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://similarworlds.com/facebookcovers/facebook-cover-photos-timeline/fb/nature/Mountain-Landscape-Trees-Facebook-Cover.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h1 className="checkout_title">Your Shopping Basket</h1>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
