import React, { useContext } from "react";
import { ShoesContext } from "../../store/ShoesContext";
import "./ShoesList.css";

const ShoesList = ({ showModalHandler }) => {
  const { shoesList, addToCartHandler } = useContext(ShoesContext);

  return (
    <>
      <button onClick={showModalHandler}>Add Shoes</button>
      <div className="shoes-list-container">
        {shoesList.map((shoes, index) => (
          <div key={index} className="shoes-item">
            <div className="shoes-info">
              <h3>{shoes.name}</h3>
              <p>Description: {shoes.description}</p>
              <p>Price: {shoes.price}</p>
            </div>
            <div className="size-details">
              <p>Available Sizes:</p>
              <button className="size-btn">S: {shoes.S}</button>
              <button className="size-btn">M: {shoes.M}</button>
              <button className="size-btn">L: {shoes.L}</button>
            </div>
            <div className="add-to-cart">
              <button onClick={() => addToCartHandler(shoes)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoesList;
