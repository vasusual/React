import styled from "styled-components";

const PopularCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CategoryContainer = styled.div`
  position: relative;
  margin: 20px;
`;

const CategoryImage = styled.img`
  width: 370px;
  height: 300px;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;


const CategoryTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CategoryName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const CategoryDescription = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const PopularCategories = () => {
  return (
    <div>
      <h1>Popular Categories</h1>
      <PopularCategoriesContainer>
        <CategoryContainer>
          <a href="category/Shoes">
            <CategoryImage src="https://imageio.forbes.com/specials-images/imageserve/619138668a7dd2e2a2047632/0x0.jpg?format=jpg&width=1200" />
          </a>
          <a href="category/Shoes">
            <CategoryTitle>
              <CategoryName>SHOES</CategoryName>
              <CategoryDescription>Best for your feet</CategoryDescription>
            </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          <a href="category/Decks">
            <CategoryImage src="https://cdn.shopify.com/s/files/1/0019/6060/7795/files/IMG_8225_1200x1200.JPG?v=1615922396" />
          </a>
          <a href="category/Decks">
            <CategoryTitle>
              <CategoryName>DECKS</CategoryName>
              <CategoryDescription>
                Find a beautiful board for yourself
              </CategoryDescription>
            </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          <a href="category/Hoodies">
            <CategoryImage src="https://th-live-02.slatic.net/p/607286741c87019d609d6dfb06539d8f.jpg" />
          </a>
          <a href="category/Hoodies">
            {" "}
            <CategoryTitle>
              <CategoryName>HOODIES</CategoryName>
              <CategoryDescription>Warm and cozy</CategoryDescription>
            </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          <a href="category/Hats">
            <CategoryImage src="https://images.squarespace-cdn.com/content/v1/521e63c5e4b029c4890678a2/1434683598740-PBV4G364Z3O6P7W8XO22/o19+Deph+Casey+Stairs1+WEB.jpg?format=1000w" />
          </a>
          <a href="categrory/Hats">
            {" "}
            <CategoryTitle>
              <CategoryName>HATS</CategoryName>
              <CategoryDescription>Protect your head</CategoryDescription>
            </CategoryTitle>
          </a>
        </CategoryContainer>
      </PopularCategoriesContainer>
    </div>
  );
};

export default PopularCategories;
