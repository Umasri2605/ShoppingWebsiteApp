import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <h4 className="text-center text-danger">No items in cart</h4>
      ) : (
        <div className="row">
          {items.map((i) => (
            <div className="col-md-4 mb-4" key={i.id}>
              <div className="card shadow p-3 rounded-4">
                <img
                  src={i.thumbnail} 
                  alt={i.title}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{i.title.slice(0, 25)}</h5>
                  <p className="card-text text-success fw-bold">
                    ₹ {i.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className="text-end fw-bold mt-4">
        Total: <span className="text-success">₹ {total}</span>
      </h3>
    </div>
  );
}

export default CartPage;
