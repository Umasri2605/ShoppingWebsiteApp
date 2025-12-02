
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data.products }))
      .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
  }, [dispatch]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
    alert("Item added to cart!");
  };

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

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

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-dark fw-bold">PRODUCTS</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 col-sm-6 mb-4 d-flex" key={p.id}>
            <div className="card shadow-lg p-3 rounded-4 w-100">
              <img
                src={p.thumbnail}
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt={p.title}
                title={p.description}
              />

              <div className="card-body">
                <h5 className="card-title">{p.title.slice(0, 25)}</h5>

                <p className="text-muted" style={{ fontSize: "1.2rem" }}>
                  <b>{p.category}</b>
                </p>

              
                <p className="card-text text-success fw-bold">
                  ₹ {p.price.toLocaleString()}
                  {p.discountPercentage ? (
                    <span className="badge bg-danger ms-2">
                      {p.discountPercentage}% OFF
                    </span>
                  ) : null}
                </p>

                <p>{renderStars(p.rating)} <span className="ms-1 text-muted">({p.rating})</span></p>

                <button
                  className="btn btn-info w-100"
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

