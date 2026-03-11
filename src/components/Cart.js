import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart" style={{ marginTop: "30px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>Cart ({cartItems.length})</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item, idx) => (
            <li key={idx} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              marginBottom: "8px" }}>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(idx)} style={{ 
                background: "#ff4d4d", 
                color: "#fff", 
                border: "none", 
                borderRadius: "3px", 
                padding: "8px", 
                cursor: "pointer" 
                }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;