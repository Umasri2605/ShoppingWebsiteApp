import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SUCCESS", payload: data.products })
      )
      .catch((err) =>
        dispatch({ type: "FETCH_ERROR", payload: err.message })
      );
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
    alert("Item added to cart!");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Products</h2>

      <div className="row">
        {products.map((p) => (
          <div
            className="col-md-3 col-sm-6 mb-4 d-flex"
            key={p.id}
          >
            <div className="card shadow-lg p-3 rounded-4 w-100">
              <img
                src={p.thumbnail}
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt={p.title}
              />

              <div className="card-body">
                <h5 className="card-title">{p.title.slice(0, 20)}</h5>
                <p className="card-text text-success fw-bold">
                  ₹ {p.price}
                </p>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {p.category}
                </p>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
