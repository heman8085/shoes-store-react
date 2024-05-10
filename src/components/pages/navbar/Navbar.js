import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoesContext } from "../../store/ShoesContext";
import "./Navbar.css";

const Navbar = () => {
  const { size } = useContext(ShoesContext);
  return (
    <div className="navbar">
      <h1>Shoes shop</h1>
      <div>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        <span>{size}</span>
      </div>
    </div>
  );
};

export default Navbar;
