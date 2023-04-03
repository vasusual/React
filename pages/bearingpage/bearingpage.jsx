import { skateshop } from '../../data';
import styled from 'styled-components';

const BearingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BearingItem = styled.div`
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

function BearingPage() {
  return (
    <div>
      <h1>Bearings</h1>
      <h2>Let's see some speed</h2>
      <BearingList>
        {skateshop.BEARINGS.map((bearing) => (
          <BearingItem key={bearing.id}>
            <img src={bearing.bearingImage} alt={bearing.bearingName} />
            <h2>{bearing.bearingName}</h2>
            <p> {bearing.brand}</p>
            <p> ${bearing.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </BearingItem>
        ))}
      </BearingList>
    </div>
  );
}

export default BearingPage;
