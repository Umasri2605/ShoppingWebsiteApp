import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-2">
      <div className="container-fluid"> 

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ marginLeft: "0px" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="ShopEase"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              marginRight: "6px",
            }}
          />
          <span className="fw-bold fs-4 text-warning">ShopEase</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul
            className="navbar-nav ms-auto align-items-center"
            style={{ gap: "25px", marginRight: "5px" }} 
          >

            <li className="nav-item">
              <Link className="nav-link fs-5 text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-white" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link fs-5 text-white" to="/cart">
                <i className="bi bi-cart3 fs-4"></i>
                <span className="ms-1">Cart</span>

                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  {cartCount}
                </span>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

