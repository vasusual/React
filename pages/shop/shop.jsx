import React from 'react'
import { PRODUCTS } from '../../products'
import Announcement from './Announcement'
import {Product} from "./product"
import "./shop.css"
import Footer from './Footer'
import Slider from './Slider'
import NewsLetter from './Newsletter'




export const Shop = () => {
  return (
    <div className='shop'>
        <Announcement/>
           <h1 className='shoptitle'>OCTOPUS SKATESHOP </h1>
           
           
        <Slider/>
        <div className='products'>
            {PRODUCTS.map((product)=>
            <Product data={product}/>
            )}

        </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}
