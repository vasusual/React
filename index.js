import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './context/CartContext';
import { WishlistProvider } from './context/WishListContext';
import { skateshop } from './data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
      <App skateshop={skateshop} />
    </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);


