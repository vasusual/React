import { skateshop } from "../../data";
import styled from "styled-components";
import { ShoppingCart, Heart } from "phosphor-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../../features/CartSlice";
import {addWishlistItem} from '../../features/WishListSlice'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Product = styled.div`
  width: 300px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Brand = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const Category = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
`;

const Size = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
`;

const Color = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #000;
      color: #fff;
    }

    &:first-child {
      margin-right: 10px;
    }
  }
`;

const FilterButton = styled.button`
  font-size: 20px;
  height: 40px;
  width: 70px;
  position: absolute;
  top: 100px;
  right: 40px;
  color: white;
  background-color: teal;
  border-radius: 20px;
  cursor: pointer;
`;

const CategoryPage = () => {
  
  const { category } = useParams();
let product
  const categoryParam = category.toUpperCase();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  const handleAddToWishlist= ()=>{
    dispatch(addWishlistItem(product))
  }
  

  const products = skateshop[categoryParam] || [];

  if (products.length === 0) {
    return <div>No products found for category {categoryParam}.</div>;
  }

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id}>
          <a href={`/product/${product.id}`}>
            <Image src={product.image} alt={product.name} />
          </a>
          <Content>
            <Title>{product.name}</Title>
            <Brand>Brand: {product.brand}</Brand>
            <Category>Category: {product.category}</Category>
            <Size>Click to see sizes</Size>
            <Color>Color: {product.color}</Color>
            <Price>Price: ${product.price}</Price>
          </Content>
          <ButtonContainer>
          <button onClick={() => handleAddToCart(product)}>
              <ShoppingCart />
            </button>
            <button onClick={handleAddToWishlist}>
              <Heart />
            </button>
          </ButtonContainer>
        </Product>
      ))}
    </Container>
  );
};

export default CategoryPage;
