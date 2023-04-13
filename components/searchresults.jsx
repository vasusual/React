import React from 'react';
import { skateshop } from '../data';
import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const Brand = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 0 0;
`;
const Category = styled.p`
  font-size: 20px;
  margin: 20px 0 0 0;
`;

const SizeLabel = styled.p`
  margin-right: 10px;
`;
const Color = styled.p`
  font-size: 20px;
  margin: 20px 0 0 0;
`;
const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0 0 0;
`;
const ProductsFound=styled.h1`
  display: flex;
  align-items: center; 
  justify-content: center;
`
export const SearchResults = ({ searchQuery }) => {
  const filteredProducts = Object.values(skateshop)
    .flat()
    .filter(product =>
      Object.values(product).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div>
      <ProductsFound>Products found by your request:</ProductsFound>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map((product, index) => (
            <Container key={index}>
             <a href={`/product/${product.id}`}> <Image src={product.image} alt={product.name} /></a>
              <Content>
              <a href={`/product/${product.id}`}><Title>{product.name}</Title></a>
                <Brand>Brand:{product.brand}</Brand>
                <Category>Category: {product.category}</Category>
                <SizeLabel>Click to see sizes</SizeLabel>
                <Color>Color: {product.color}</Color>
                <Price>Price: ${product.price}</Price>
              </Content>
            </Container>
          ))}
        </ul>
      )}
    </div>
  );
};
