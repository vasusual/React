import { ShoppingCart, Heart } from 'phosphor-react';
import { skateshop } from '../../data';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishListContext';

const OtherList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const OtherItem = styled.div`
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

function OtherPage() {
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
      <h1>Other Stuff</h1>
      <h2>Stickers, pins, keychains, etc.</h2>
      <OtherList>
        {skateshop.OTHERSTUFF.map((other) => (
          <OtherItem key={other.id}>
           <a href={`/product/${other.id}`}>
  <img src={other.image} alt={other.name} />
</a>
            <h2>{other.name}</h2>
            <p>{other.brand}</p>
            <p>${other.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(other)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(other)}>
                <Heart />
              </button>
            </div>
            
          </OtherItem>
        ))}
      </OtherList>
    </div>
  );
}

export default OtherPage;
