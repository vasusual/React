import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  
  useEffect(() => {
    const savedItems = localStorage.getItem("wishlistItems");
    if (savedItems) {
      setWishlistItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  function addWishlistItem(item) {
    setWishlistItems([...wishlistItems, item]);
  }

  function removeWishlistItem(item) {
    const updatedItems = wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== item.id
    );
    setWishlistItems(updatedItems);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addWishlistItem, removeWishlistItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
