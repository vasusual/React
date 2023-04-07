
import './App.css';
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'

import {Navbar} from "./components/navbar"
import { Shop } from './pages/shop/shop';
import {Cart} from './pages/cart/cart'
import CartProvider from './context/CartContext';
import DeckPage from './pages/deckpage/deckpage';
import TruckPage from './pages/truckpage/truckpage';
import NewsLetter from './pages/shop/Newsletter';
import Footer from './pages/shop/Footer';
import BearingPage from './pages/bearingpage/bearingpage';
import CompletesPage from './pages/completespage/completespage';
import WheelPage from './pages/wheelspage/wheelspage';
import SkateStuffPage from './pages/skatestuff/skatestuff';
import SkateboardingPage from './pages/skateboarding/skateboardingpage';
import ShoesPage from './pages/shoespage/shoespage';
import ApparelPage from './pages/apparel/apparelpage';
import TShirtsPage from './pages/tshirts/tshirtspage'
import HoodiePage from './pages/hoodies/hoodiespage';
import PantsPage from './pages/pants/pantspage';
import JacketsPage from './pages/jackets/jacketspage';
import HatsPage from './pages/hats/hatspage';

import WomenPage from './pages/women/womenpage';
import BagPage from './pages/accessories/bags/bagpage';
import AccessoriesPage from './pages/accessories/accessoriespage';
import OtherPage from './pages/other/otherpage';
import AccsAndOtherPage from './pages/accsandother/accsandother';
import ShirtsPage from './pages/shirts/shirtspage';
import { Wishlist } from './pages/wishlist/wishlist';
import { skateshop } from './data';
import SingleProductPage from './components/singleproductpage';
import BrandPage from './components/brandpage';

function App({skateshop}) {
  return (
    <div className="App">
      
      
      <Router>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
         <Route path="/cart" element={<Cart/>}/>
          <Route path="/decks" element={<DeckPage/>}/>
          <Route path="/trucks" element={<TruckPage/>}/>
          <Route path="/bearings" element={<BearingPage/>}/>
          <Route path="/completes" element={<CompletesPage/>}/>
          <Route path="/wheels" element={<WheelPage/>}/>
          <Route path="/stuff" element ={<SkateStuffPage/>}/>
          <Route path="/shopskate" element={<SkateboardingPage/>}/>
          <Route path="/shoes" element={<ShoesPage/>}/>
          <Route path="/apparel" element={<ApparelPage/>}/>
           <Route path="/tshirts" element={<TShirtsPage/>}/>
            <Route path="/hoodies" element={<HoodiePage/>}/>
          <Route path="/jackets" element={<JacketsPage/>}/>
          <Route path="/hats" element={<HatsPage/>}/>
          <Route path="/women" element={<WomenPage/>}/>    
          <Route path="/pants" element={<PantsPage/>}/>
          <Route path="/bags" element={<BagPage/>}/>
          <Route path="/accessories" element={<AccessoriesPage/>}/>
          <Route path="/other" element={<OtherPage/>}/>
          <Route path="/accsandother" element={<AccsAndOtherPage/>}/>
          <Route path="/shirts" element={<ShirtsPage/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
        </Routes>
        
      </Router>
      
      <NewsLetter/>
      <Footer/>
    </div>
  );
}


export default App;
