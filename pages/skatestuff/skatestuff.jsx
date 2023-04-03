import { skateshop } from '../../data';
import styled from 'styled-components';

const StuffList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StuffItem = styled.div`
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

function SkateStuffPage() {
  return (
    <div>
      <h1>Skate Stuff</h1>
      <h2>Get all the essentials for your skateboarding needs</h2>
      <StuffList>
        {skateshop.SKATESTUFF.map((stuff) => (
          <StuffItem key={stuff.stuffId}>
            <img src={stuff.stuffImage} alt={stuff.stuffName} />
            <h2>{stuff.stuffName}</h2>
            <p>Brand: {stuff.stuffBrand}</p>
            <p>Price: ${stuff.stuffPrice.toFixed(2)}</p>
            <button>Add to Cart</button>
          </StuffItem>
        ))}
      </StuffList>
    </div>
  );
}

export default SkateStuffPage;
