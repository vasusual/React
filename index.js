import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WishlistProvider } from './context/WishListContext';
import { skateshop } from './data';
import { Provider } from 'react-redux';
import { store } from './Store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WishlistProvider>
        <App skateshop={skateshop} />
      </WishlistProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
