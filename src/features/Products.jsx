import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SUCCESS", payload: data })
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
    <div className="container">

      <div className="row">
        {products.map((p) => (
          <div className="col-3 p-3" key={p.id}>
            <img src={p.image} width="150" height="150" />
            <h5>{p.title.slice(0, 20)}</h5>
            <p>Rs. {p.price}</p>
            <button
              className="btn btn-success"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;