import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";
import "./navbar.css";
import { Home, Search } from "@mui/icons-material";
import { skateshop } from "../data";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

  
    const filteredResults = skateshop.items.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
    setSearchResults(filteredResults);
  };

  return (
    <div className="navbar">
      <div className="links">
        <input
          type="text"
          id="search-bar"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Link className="home" to="/">
          <Home size={32} />
        </Link>
        <Link to="/shopskate">Skate</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/apparel">Apparel</Link>
        <Link to="/accsandother">Accessories</Link>

        <Link className="cart" to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link className="wishlist" to="/wishlist">
          <Heart size={32} />
        </Link>
      </div>

     
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <Link to={`/product/${result.id}`} key={result.id}>
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
