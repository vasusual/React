import { skateshop } from '../../data';
import styled from 'styled-components';

const CompletesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CompletesItem = styled.div`
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

function CompletesPage() {
  return (
    <div>
      <h1>Completes</h1>
      <h2>Now you are all set</h2>
      <CompletesList>
        {skateshop.COMPLETES.map((complete) => (
          <CompletesItem key={complete.id}>
            <img src={complete.completeImage} alt={complete.completeName} />
            <h2>{complete.completeName}</h2>
            <p>Brand: {complete.brand}</p>
            <p>Size: {complete.size}</p>
            <p>Price: ${complete.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </CompletesItem>
        ))}
      </CompletesList>
    </div>
  );
}

export default CompletesPage;
