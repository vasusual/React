
import { skateshop } from '../../data';
import styled from 'styled-components';

const TShirtList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TShirtItem = styled.div`
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
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 3px;
  }

  button {
    padding: 10px 20px;
    background-color: #3F51B5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
};`

function TShirtsPage() {
  return (
    <div>
      <h1>T-Shirts</h1>
      <h2>Stay stylish and comfortable</h2>
      <TShirtList>
        {skateshop.TSHIRTS.map((shirt) => (
          <TShirtItem key={shirt.tshirtId}>
            <img src={shirt.thsirtImg} alt={shirt.tshirtName} />
            <h2>{shirt.tshirtName}</h2>
            <p> {shirt.tshirtBrand}</p>
            <p> ${shirt.tshirtPrice.toFixed(2)}</p>
            <button>Add to Cart</button>
          </TShirtItem>
        ))}
      </TShirtList>
    </div>
  );
}

export default TShirtsPage;
