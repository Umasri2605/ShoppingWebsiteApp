import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((i) => (
        <div>
           <img src={i.image} alt="" style={{width:"200px"}}/>
          <p key={i.id}>{i.title} — Rs.{i.price}</p>
       </div>
        ))
      )}

      <h3>Total: Rs.{total}</h3>
    </div>
  );
}

export default CartPage;