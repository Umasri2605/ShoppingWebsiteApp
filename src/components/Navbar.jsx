import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <img
              style={{ width: "10%", maxWidth: "70px", borderRadius: "15px" }}
              src="https://i.pinimg.com/280x280_RS/68/a8/8a/68a88a262ecdfe478dc2294f01251873.jpg"
              alt="ShoppEase"
    />
      <Link className="navbar-brand text-white" to="/" style={{marginLeft:"500px"}}>Home</Link>
      <Link className="navbar-brand text-white" to="/products">Products</Link>
      <Link className="nav-link text-white fw-bold" to="/cart"> <i class="bi bi-cart3"></i>Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;