import { useParams } from 'react-router-dom';
import { skateshop } from "../data";
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { WishlistContext } from '../context/WishListContext';
import { ShoppingCart, Heart } from 'phosphor-react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
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

const Size = styled.p`
  font-size: 20px;
  margin: 20px 0 0 0;
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
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  margin-top: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
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
const Product=styled.div``

const BrandPage = () => {
  const { addItem } = useContext(CartContext);
  const { wishlistItems, addWishlistItem } = useContext(WishlistContext);

  const handleAddWishlistItem = (item) => {
    const isInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
    if (!isInWishlist) {
      addWishlistItem(item);
    }
  };

  const { brand } = useParams();

  const products = Object.values(skateshop).flatMap(category => category.filter(p => p.brand === brand));

  if (products.length === 0) {
    return <div>No products found for brand {brand}.</div>;
  }

  return (
    <Container>
      {products.map(product => (
        <Product key={product.id}>
          <Image src={product.image} alt={product.name} />
          <Content>
            <Title>{product.name}</Title>
            <Brand>Brand: {product.brand}</Brand>
            <Category>Category: {product.category}</Category>
            <Size>Size: {product.size}</Size>
            <Color>Color: {product.color}</Color>
            <Price>Price: ${product.price}</Price>
          </Content>
          <ButtonContainer>
            <button onClick={() => addItem(product)}>
              <ShoppingCart />
            </button>
            <button onClick={() => handleAddWishlistItem(product)}>
              <Heart />
            </button>
          </ButtonContainer>
        </Product>
      ))}
    </Container>
  );
};
export default BrandPage