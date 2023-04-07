import { skateshop } from '../../data';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ShoppingCart, Heart } from 'phosphor-react';
import { WishlistContext } from '../../context/WishListContext';

const ShirtList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ShirtItem = styled.div`
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

function ShirtsPage() {
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
      <h1>Shirts</h1>
      <h2>Button up</h2>
      <ShirtList>
        {skateshop.SHIRTS.map((shirt) => (
          <ShirtItem key={shirt.id}>
            <a href={`/product/${shirt.id}`}>
  <img src={shirt.image} alt={shirt.name} />
</a>
            <h2>{shirt.name}</h2>
            <p>{shirt.brand}</p>
            <p>${shirt.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(shirt)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(shirt)}>
                <Heart />
              </button>
            </div>
          </ShirtItem>
        ))}
      </ShirtList>
    </div>
  );
}

export default ShirtsPage;
