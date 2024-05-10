import React, { useEffect, useState, useContext } from "react";
import "./Cart.css";
import { ShoesContext } from "../../store/ShoesContext";
import { Link } from "react-router-dom";

const ShoesCart = () => {
  const { cart } = useContext(ShoesContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
  });

  const handlePrice = () => {
    let totalPrice = cart.reduce((acc, item) => {
      acc = acc + 1*item.price;
      return acc;
    },0);
    setPrice(totalPrice);
  };

  return (
    <div className="cart-main">
      {cart?.map((item, index) => (
        <div className="cart_box" key={index}>
          <div className="cart_img">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <div className="cart_buttons">
            <span>S: {item.S} </span>
            <span>M: {item.M} </span>
            <span>L: {item.L} </span>
          </div>
          <div className="item-price">
            <span>Rs. {item.price}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Amount: </span>
        <span>Rs. {price}</span>
      </div>
      <div className="proceed">
        <Link to="/">
          <button className="proceed-btn">Cancel</button>
        </Link>
        <button className="proceed-btn">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default ShoesCart;
