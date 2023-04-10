import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Heart } from 'phosphor-react';
import './navbar.css';
import { Home, Search } from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce(
    (count, currentItem) => count + currentItem.quantity,
    0
  );

  return (
    <div className="navbar">
      <div className="links">
        <input
          type="text"
          id="search-bar"
          placeholder="Search products..."
        />
        <Link className="home" to="/">
          <Home size={32} />
        </Link>
        <Link to="/shopskate">Skate</Link>
        <Link to="/category/Shoes">Shoes</Link>
        <Link to="/apparel">Apparel</Link>
        <Link to="/accsandother">Accessories</Link>

        <Link className="cart" to="/cart">
          <ShoppingCart size={32} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
        <Link className="wishlist" to="/wishlist">
          <Heart size={32} />
        </Link>
      </div>
    </div>
  );
};
