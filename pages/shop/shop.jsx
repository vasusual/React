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
      <h1 className="shoptitle">OCTOPUS SKATESHOP </h1>

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
