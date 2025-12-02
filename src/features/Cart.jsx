

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);


  const total = items.reduce((sum, i) => sum + i.price, 0);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.round(rating) ? "text-warning" : "text-secondary"}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-dark fw-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <h4 className="text-center text-danger">No items in cart</h4>
      ) : (
        <div className="row">
          {items.map((i) => (
            <div className="col-md-4 col-sm-6 mb-4 d-flex" key={i.id}>
              <div className="card shadow-lg p-3 rounded-4 w-100">
                <img
                  src={i.thumbnail}
                  alt={i.title}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                  title={i.description} 
                />

                <div className="card-body">
                  <h5 className="card-title">{i.title.slice(0, 25)}</h5>

                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {i.category}
                  </p>

                  <p className="card-text text-success fw-bold">
                    ₹ {i.price.toLocaleString()}
                    {i.discountPercentage && (
                      <span className="badge bg-danger ms-2">
                        {i.discountPercentage}% OFF
                      </span>
                    )}
                  </p>

                  {i.rating && (
                    <p>
                      {renderStars(i.rating)}{" "}
                      <span className="ms-1 text-muted">({i.rating})</span>
                    </p>
                  )}

                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => removeFromCart(i.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <h3 className="text-end fw-bold mt-4">
          Total: <span className="text-success">₹ {total.toLocaleString()}</span>
        </h3>
      )}
    </div>
  );
}

export default CartPage;
