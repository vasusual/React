import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import CartPage from './pages/cart/cartPage';
import CartProvider from './context/CartContext';
import NewsLetter from './pages/shop/Newsletter';
import Footer from './pages/shop/Footer';
import SkateboardingPage from './pages/skateboarding/skateboardingpage';
import ApparelPage from './pages/apparel/apparelpage';
import AccsAndOtherPage from './pages/accsandother/accsandother';
import WishlistPage from './pages/wishlist/wishlist';
import { skateshop } from './data';
import SingleProductPage from './pages/singleProductPage/singleproductpage';
import BrandPage from './pages/brand/brandpage';
import CategoryPage from './pages/categories/categories';
import { SearchResults } from './pages/searchresults/searchresults';
import { NewsPage } from './pages/news/newspage';
import NewsList from './components/NewsList';
import ScrollToTopButton from './components/scrolltotopbutton';
import CheckOutForm from './components/checkoutform';
import ThanksForOrder from './pages/thanksForOrder/thanksfororeder';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import UserPage from './pages/user/userpage';
import ContactsPage from './pages/contacts/ContactsPage';
import { UserProvider } from './context/UserContext';
import SignOut from './components/auth/Signout';
// import OrderPage from './components/OrderPage';

function App() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shopskate" element={<SkateboardingPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        <Route path="/accsandother" element={<AccsAndOtherPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/brand/:brand" element={<BrandPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
        <Route path="/news" element={<NewsList/>}/>
        <Route path="/checkout" element={<CheckOutForm/>}/>
        <Route path="/thankyou" element={<ThanksForOrder/>}/>
        {/* <Route path="/orders" element={<OrderPage/>}/> */}
        <Route path="/auth" element={<UserProvider><div><AuthDetails/><SignIn/><SignOut/><SignUp/>index={true} </div></UserProvider>} />
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>


        
        
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
