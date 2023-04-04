import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Home } from "@mui/icons-material";

export const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="links">
              <Link to="/shopskate">Skate</Link>
              <Link to="/shoes">Shoes</Link>
              <Link to="/apparel">Apparel</Link>
              
              <Link className="cart" to="/cart"><ShoppingCart size={32}/></Link>
              <Link className="home" to="/"><Home size={32}/></Link>
            </div>
        </div>
    )
}
