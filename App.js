
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar"
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

import { ShopContextProvider } from './context/shop-context';
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
import TshirtsPage from './pages/tshirts/tshirtspage';
import HoodiesPage from './hoodies/hoodiespage';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      
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
           <Route path="/tshirts" element={<TshirtsPage/>}/>
            <Route path="/hoodies" element={<HoodiesPage/>}/>
          {/* <Route path="/pants" element={<PantsPage/>}/>
          <Route path="/jackets" element={<JacketsPage/>}/>
          <Route path="/hats" element={<HatsPage/>}/>
          <Route path="/women" element={<WomenPage/>}/>  */} 
          <Route path="/apparel" element={<ApparelPage/>}/>
          


        </Routes>
      </Router>
      </ShopContextProvider>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}


export default App;
