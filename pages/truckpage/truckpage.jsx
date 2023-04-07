import { skateshop } from '../../data';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ShoppingCart, Heart } from 'phosphor-react';
import { WishlistContext } from '../../context/WishListContext';

const TruckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TruckItem = styled.div`
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

function TruckPage() {
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
      <h1>Trucks</h1>
      <h2>AKA the things that put wheels and deck together</h2>
      <TruckList>
        {skateshop.TRUCKS.map((truck) => (
          <TruckItem key={truck.id}>
           <a href={`/product/${truck.id}`}>
  <img src={truck.image} alt={truck.name} />
</a>
            <h2>{truck.name}</h2>
            <p> {truck.brand}</p>
            <p> ${truck.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(truck)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(truck)}>
                <Heart />
              </button>
            </div>
          </TruckItem>
        ))}
      </TruckList>
    </div>
  );
}
export default TruckPage;