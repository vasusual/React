import { skateshop } from "../../data";
import styled from "styled-components";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ShoppingCart, Heart } from 'phosphor-react';
import { WishlistContext } from '../../context/WishListContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 60%;
  height: 170px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  
`;

const Name = styled.p`
  font-size: 1.3rem;
`;

const Brand = styled.p`
  font-size: 1rem;
`;

const Price = styled.p`
  font-size: 1rem;
  
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

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
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #3F51B5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  opacity: 1;
`;




const NewArrivals = () => {
  const { addItem } = useContext(CartContext);
  const { wishlistItems, addWishlistItem } = useContext(WishlistContext);

  const handleAddWishlistItem = (item) => {
    
    const isInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
    if (!isInWishlist) {
      addWishlistItem(item);
    }
  };
  const hoodie = skateshop.HOODIES.find((item) => item.id === 76) || {};
  const shoes = skateshop.SHOES.find((item) => item.id === 52) || {};
  const deck = skateshop.DECKS.find((item) => item.id === 7) || {};
  const wheel = skateshop.WHEELS.find((item) => item.id === 36) || {};

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        New Arrivals
      </h1>

      <Container>
        <Item>
          <a href={`/product/${hoodie.id}`}>
            <Image src={hoodie.image} alt={hoodie.name} />
          </a>
          <Name>{hoodie.name}</Name>
          <Brand>{hoodie.brand}</Brand>
          <Price>${hoodie.price}</Price>
          <ButtonsContainer >
  <button onClick={() => addItem(hoodie)}>
    <ShoppingCart />
  </button>
  <button onClick={() => handleAddWishlistItem(hoodie)}>
    <Heart />
  </button>
  </ButtonsContainer>

        </Item>
        <Item>
          <a href={`/product/${shoes.id}`}>
            <Image src={shoes.image} alt={shoes.name} />
          </a>
          <Name>{shoes.name}</Name>
          <Brand>{shoes.brand}</Brand>
          <Price>${shoes.price}</Price>
          <ButtonsContainer >
  <button onClick={() => addItem(shoes)}>
    <ShoppingCart />
  </button>
  <button onClick={() => handleAddWishlistItem(shoes)}>
    <Heart />
  </button>
  </ButtonsContainer >
        </Item>
        <Item>
          <a href={`/product/${deck.id}`}>
            <Image src={deck.image} alt={deck.name} />
          </a>
          <Name>{deck.name}</Name>
          <Brand>{deck.brand}</Brand>
          <Price>${deck.price}</Price>
          <ButtonsContainer >
  <button onClick={() => addItem(deck)}>
    <ShoppingCart />
  </button>
  <button onClick={() => handleAddWishlistItem(deck)}>
    <Heart />
  </button>
  </ButtonsContainer >
        </Item>
        <Item>
          <a href={`/product/${wheel.id}`}>
            <Image src={wheel.image} alt={wheel.name} />
          </a>
          <Name>{wheel.name}</Name>
          <Brand>{wheel.brand}</Brand>
          <Price>${wheel.price}</Price>
          <ButtonsContainer >
  <button onClick={() => addItem(wheel)}>
    <ShoppingCart />
  </button>
  <button onClick={() => handleAddWishlistItem(wheel)}>
    <Heart />
  </button>
</ButtonsContainer >
        </Item>
      </Container>
    </div>
  );
};

export default NewArrivals;
