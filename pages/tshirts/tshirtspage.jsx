import { skateshop } from '../../data';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishListContext';
import { useContext } from 'react';
import { ShoppingCart, Heart, ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import { useState } from 'react';

const TShirtList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TShirtItem = styled.div`
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
  `
  const prevButton= styled.button`
  color: white;
  background-color: teal;
  border-radius: 50%;
  cursor: pointer;
`;
const nextButton=styled.button`

color: teal;
border-radius: 50%;
cursor: pointer;
`

export default function TShirtsPage() {
  const { addItem } = useContext(CartContext);
  const { wishlistItems, addWishlistItem } = useContext(WishlistContext);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = skateshop.TSHIRTS.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddWishlistItem = (item) => {
    const isInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
    if (!isInWishlist) {
      addWishlistItem(item);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(skateshop.TSHIRTS.length / itemsPerPage);

  return (
    <div>
      <h1>T-Shirts</h1>
      <h2>Stay stylish and comfortable</h2>
      <TShirtList>
        {currentItems.map((tshirt) => (
          <TShirtItem key={tshirt.id}>
           <a href={`/product/${tshirt.id}`}>
  <img src={tshirt.image} alt={tshirt.name} />
</a>
            <h2>{tshirt.name}</h2>
            <p> {tshirt.brand}</p>
            <p> ${tshirt.price}</p>
            <div className="buttons-container">
              <button onClick={() => addItem(tshirt)}>
                <ShoppingCart />
              </button>
              <button onClick={() => handleAddWishlistItem(tshirt)}>
                <Heart />
              </button>
            </div>
          </TShirtItem>
        ))}
      </TShirtList>
      <div>
        {currentPage > 1 && (
          <prevButton onClick={() => handlePageChange(currentPage - 1)}><ArrowCircleLeft size={56}/></prevButton>
        )}
        {currentPage < totalPages && (
          <nextButton  onClick={() => handlePageChange(currentPage + 1)}><ArrowCircleRight size={56}/></nextButton>
        )}
      </div>
    </div>
  );
}
