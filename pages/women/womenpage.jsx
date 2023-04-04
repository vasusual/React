import { skateshop } from '../../data';
import styled from 'styled-components';

const WomenList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WomenItem = styled.div`
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

  button {
    padding: 10px 20px;
    background-color: #3F51B5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    button {
      opacity: 1;
    }
  }
`;

function WomenPage() {
  
  return (
    <div>
      <h1>Women's Clothing</h1>
      <h2>Get stylish with our women's collection</h2>
      <WomenList>
        {skateshop.WOMEN.map((item) => (
          <WomenItem key={item.id}>
            <img src={item.image} alt={item.womenName} />
            <h2>{item.name}</h2>
            <p>{item.brand}</p>
            <p>${item.price}</p>
            <button>Add to Cart</button>
          </WomenItem>
        ))}
      </WomenList>
    </div>
  );
}

export default WomenPage;
