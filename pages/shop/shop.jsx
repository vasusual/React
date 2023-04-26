import React from "react";
import Announcement from "./Announcement";
import "./shop.css";
import Footer from "./Footer";
import Slider from "./Slider";
import NewsLetter from "./Newsletter";
import Brands from "./brands";
import PopularCategories from "./popularcategories";
import NewArrivals from "./newarrivals";

export const Shop = () => {
  return (
    <div className="shop">
      <Announcement />
      <h1 className="shoptitle" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>OCTOPUS <img src="https://i.pinimg.com/564x/eb/aa/2c/ebaa2c517a8777c27f2a541c75a7b1f5.jpg" style={{width: '50px', height: '50px'}} /> SKATESHOP </h1>


      <Slider />
      <br />
      <Brands />
      <br />
      <PopularCategories />
      <br />
      <NewArrivals />

      <NewsLetter />
      <Footer />
    </div>
  );
};
