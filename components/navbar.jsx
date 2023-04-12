import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";
import { Home, Search } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./navbar.css";

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm("");
  };

  const cartItemCount = cart.reduce(
    (count, currentItem) => count + currentItem.quantity,
    0
  );

  return (
    <div className="navbar">
      <div className="links">
        <form onSubmit={handleSearch}>
          <div className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products..."
            />
            <button type="submit">
              <Search className="search-icon" />
            </button>
          </div>
        </form>
        <Link className="home" to="/">
          <Home size={32} />
        </Link>
        <Link to="/shopskate">Skate</Link>
        <Link to="/category/Shoes">Shoes</Link>
        <Link to="/apparel">Apparel</Link>
        <Link to="/accsandother">Accessories</Link>
        <Link to="/news">News</Link>


        <Link className="cart" to="/cart">
          <ShoppingCart size={32} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
        <Link className="wishlist" to="/wishlist">
          <Heart size={32} />
        </Link>
      </div>
    </div>
  );
};
