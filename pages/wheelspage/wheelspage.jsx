import { skateshop } from '../../data';
import styled from 'styled-components';

const WheelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WheelItem = styled.div`
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

function WheelPage() {
  return (
    <div>
      <h1>Wheels</h1>
      <h2>Round and round we go</h2>
      <WheelList>
        {skateshop.WHEELS.map((wheel) => (
          <WheelItem key={wheel.id}>
            <img src={wheel.wheelImage} alt={wheel.wheelName} />
            <h2>{wheel.wheelName}</h2>
            <p> {wheel.brand}</p>
            <p> ${wheel.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </WheelItem>
        ))}
      </WheelList>
    </div>
  );
}

export default WheelPage;
