import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import CartProvider from './context/CartContext';
import NewsLetter from './pages/shop/Newsletter';
import Footer from './pages/shop/Footer';
import SkateboardingPage from './pages/skateboarding/skateboardingpage';
import ApparelPage from './pages/apparel/apparelpage';
import AccsAndOtherPage from './pages/accsandother/accsandother';
import { Wishlist } from './pages/wishlist/wishlist';
import { skateshop } from './data';
import SingleProductPage from './components/singleproductpage';
import BrandPage from './components/brandpage';
import CategoryPage from './components/categories';
import { SearchResults } from './components/searchresults';
import { NewsPage } from './components/newspage';
import NewsList from './components/NewsList';
import ScrollToTopButton from './components/scrolltotopbutton';
import CheckOutForm from './components/checkoutform';
import ThanksForOrder from './components/thanksfororeder';
import OrdersPage from './components/orderspage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopskate" element={<SkateboardingPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        <Route path="/accsandother" element={<AccsAndOtherPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/brand/:brand" element={<BrandPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
        <Route path="/news" element={<NewsList/>}/>
        <Route path="/checkout" element={<CheckOutForm/>}/>
        <Route path="/thankyou" element={<ThanksForOrder/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/auth" element={<div><SignIn/><SignUp/><AuthDetails/></div>} />


        
        
      </Routes>
      <NewsLetter />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function Main() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}

export default Main;
