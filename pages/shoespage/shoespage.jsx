import { skateshop } from '../../data';
import styled from 'styled-components';

const ShoeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShoeItem = styled.div`
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

function ShoesPage() {
  return (
    <div>
      <h1>Shoes</h1>
      <h2>Best for your feet</h2>
      <ShoeList>
        {skateshop.SHOES.map((shoe) => (
          <ShoeItem key={shoe.shoeId}>
            <img src={shoe.shoeImg} alt={shoe.shoeName} />
            <h2>{shoe.shoeName}</h2>
            <p>Brand: {shoe.shoeBrand}</p>
            <p>Price: ${shoe.shoePrice.toFixed(2)}</p>
            <button>Add to Cart</button>
          </ShoeItem>
        ))}
      </ShoeList>
    </div>
  );
}

export default ShoesPage;
