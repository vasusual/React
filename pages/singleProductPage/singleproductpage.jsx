import { useState } from "react";
import { useParams } from "react-router-dom";
import { skateshop } from "../../data";
import styled from "styled-components";
import { ShoppingCart, Heart } from "phosphor-react";
import { useDispatch } from 'react-redux';
import { addItem } from "../../features/CartSlice";
import {addWishlistItem} from '../../features/WishListSlice'




const SingleProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const handleAddToWishlist= ()=>{
    dispatch(addWishlistItem(product))
  }
 


  const { id } = useParams();
  const productId = parseInt(id);

  let product;

 

  for (let i = 0; i < Object.values(skateshop).length; i++) {
    product = Object.values(skateshop)[i].find((p) => p.id === productId);
    if (product) break;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

 

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <Brand>Brand:{product.brand}</Brand>
        <Category>Category:{product.category}</Category>
        <SizeContainer>
          <SizeLabel>Size:</SizeLabel>
          <SizeSelect
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.size && product.size.length > 0 ? (
              <>
                <SizeOption disabled value="">
                  Select Size
                </SizeOption>
                {product.size.map((size) => (
                  <SizeOption key={size} value={size}>
                    {size}
                  </SizeOption>
                ))}
              </>
            ) : (
              <SizeOption value={product.size}>{product.size}</SizeOption>
            )}
          </SizeSelect>
        </SizeContainer>
        <Color>Color:{product.color}</Color>
        <Price>Price: ${product.price}</Price>
      </Content>
      <ButtonContainer>
      <button onClick={handleAddToCart}>
          <ShoppingCart />
        </button>
        <button onClick={handleAddToWishlist}>
          <Heart />
        </button>
      </ButtonContainer>
    </Container>
  );
};

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  label {
    font-size: 20px;
    margin-right: 10px;
  }

  select {
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 360px;
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

const Size = styled.div`
  font-size: 20px;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SizeLabel = styled.p`
  margin-right: 10px;
`;

const SizeSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 120px;
`;

const SizeOption = styled.option`
  font-size: 20px;
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
    background-color: white;
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

export default SingleProductPage;