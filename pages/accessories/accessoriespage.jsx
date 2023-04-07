import { skateshop } from '../../data';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { ShoppingCart, Heart } from 'phosphor-react';
import { WishlistContext } from '../../context/WishListContext';

const AccessoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AccessoriesItem = styled.div`
  width: 23%;
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    height: 300px;
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

function AccessoriesPage() {
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
      <h1>Accessories</h1>
      <h2>Add some extra stuff</h2>
      <AccessoriesList>
        {skateshop.ACCESSORIES.map((accessories) => (
          <AccessoriesItem key={accessories.id}>
           <a href={`/product/${accessories.id}`}>
  <img src={accessories.image} alt={accessories.deckName} />
</a>
            <h2>{accessories.name}</h2>
            <p>{accessories.brand}</p>
            <p>${accessories.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(accessories)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(accessories)}>
                <Heart />
              </button>
            </div>
            
          </AccessoriesItem>
        ))}
      </AccessoriesList>
    </div>
  );
}

export default AccessoriesPage;