import React, { useContext } from 'react';
import { skateshop } from '../../data';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { ShoppingCart, Heart } from 'phosphor-react';
import { WishlistContext } from '../../context/WishListContext';

const DeckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const DeckItem = styled.div`
  width: 23%;
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 10px;
    transition: transform 0.3s ease-in-out;
  }

  h2 {
    margin: 10px 0 5px;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  button {
    padding: 10px 20px;
    background-color: #3F51B5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    opacity: 1;
  }

  button:last-child {
    margin-left: 0;
    margin-right: 10px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .buttons-container {
      opacity: 1;
    }
  }
`;

const DeckPage = () => {
  const { addItem } = useContext(CartContext);
  const { wishlistItems, addWishlistItem } = useContext(WishlistContext);

  const handleAddWishlistItem = (item) => {
    
    const isInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
    if (!isInWishlist) {
      addWishlistItem(item);
    }
  };
  

  return (
    <div>
      <h1>Decks</h1>
      <h2>We have them for any preferences</h2>
      <DeckList>
        {skateshop.DECKS.map((deck) => (
          <DeckItem key={deck.id}>
            <a href={`/product/${deck.id}`}>
  <img src={deck.image} alt={deck.deckName} />
</a>
            <h2>{deck.name}</h2>
            <p>Brand: {deck.brand}</p>
            <p>Size: {deck.size}</p>
            <p>Price: ${deck.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(deck)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(deck)}>
                <Heart />
              </button>
            </div>
          </DeckItem>
        ))}
      </DeckList>
    </div>
  );
};

export default DeckPage;
