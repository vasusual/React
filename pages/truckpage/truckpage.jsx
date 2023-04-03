import { skateshop } from '../../data';
import styled from 'styled-components';

const TruckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TruckItem = styled.div`
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

function TruckPage() {
  return (
    <div>
      <h1>Trucks</h1>
      <h2>AKA the things that put wheels and deck together</h2>
      <TruckList>
        {skateshop.TRUCKS.map((truck) => (
          <TruckItem key={truck.id}>
            <img src={truck.truckImage} alt={truck.truckName} />
            <h2>{truck.truckName}</h2>
            <p> {truck.brand}</p>
            <p> ${truck.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </TruckItem>
        ))}
      </TruckList>
    </div>
  );
}
export default TruckPage;