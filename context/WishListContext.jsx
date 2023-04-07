import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  function addWishlistItem(item) {
    setWishlistItems([...wishlistItems, item]);
  }

  function removeWishlistItem(item) {
    const updatedItems = wishlistItems.filter(wishlistItem => wishlistItem.id !== item.id);
    setWishlistItems(updatedItems);
  }

  return (
    <WishlistContext.Provider value={{ wishlistItems, addWishlistItem, removeWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
}
