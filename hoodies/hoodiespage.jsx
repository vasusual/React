import React from 'react';
import { skateshop } from '../data';
import styled from 'styled-components';

const HoodieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HoodieItem = styled.div`
  width: 23%;
  margin-bottom: 30px;
  text-align: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h2 {
    margin: 10px 0 5px;
  }

  p {
    margin: 5px 0;
  }

  button {
    padding: 10px 20px;
    background-color: #3F51B5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
};
`
const HoodiePage = () => {
  return (
    <div>
      <h1>Hoodies</h1>
      <h2>We have them for any preferences</h2>
      <HoodieList>
        {skateshop.HOODIES.map((hoodie) => (
          <HoodieItem key={hoodie.hoodId}>
            <img src={hoodie.hoodImg} alt={hoodie.hoodName} />
            <h2>{hoodie.hoodName}</h2>
            <p>Brand: {hoodie.hoodBrand}</p>
            <p>Price: ${hoodie.hoodPrice.toFixed(2)}</p>
            <button>
              Add to Cart
            </button>
          </HoodieItem>
        ))}
      </HoodieList>
    </div>
  );
};

export default HoodiePage;
