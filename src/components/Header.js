import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <header className="header">

      <h1>Handcrafted Accessories Hub</h1>

      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart(0)</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <input 
        type="text"
        placeholder="Search accessories..."
        className="search-bar"
        onClick={() => navigate("/search")}
      />

    </header>
  );
}

export default Header;