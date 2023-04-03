import React, { useContext } from 'react';
import { skateshop } from '../../data';
import styled from 'styled-components';
import { ShopContext } from '../../context/shop-context';

const DeckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DeckItem = styled.div`
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
`;

const DeckPage = () => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  };

  return (
    <div>
      <h1>Decks</h1>
      <h2>We have them for any preferences</h2>
      <DeckList>
        {skateshop.DECKS.map((deck) => (
          <DeckItem key={deck.deckId}>
            <img src={deck.deckImage} alt={deck.deckName} />
            <h2>{deck.deckName}</h2>
            <p>Brand: {deck.deckBrand}</p>
            <p>Size: {deck.deckSize}</p>
            <p>Price: ${deck.deckPrice.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(deck.deckId)}>
              Add to Cart
            </button>
          </DeckItem>
        ))}
      </DeckList>
    </div>
  );
};

export default DeckPage;
