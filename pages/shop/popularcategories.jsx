import styled from 'styled-components';

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
          <a href="categories/Shoes"><CategoryImage src="https://www.converse.com.au/media/ewave_blog/post/158/image/845ef2e315d28caf40cdc6006489f439.jpg" /></a>
          <a href="categories/Shoes"><CategoryTitle>
            <CategoryName>SHOES</CategoryName>
            <CategoryDescription>Best for your feet</CategoryDescription>
          </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          <a href="categories/Decks"><CategoryImage src="https://bloximages.chicago2.vip.townnews.com/bozemandailychronicle.com/content/tncms/assets/v3/editorial/2/5f/25f65314-80b7-11ed-a089-13d5c80893dd/63a2399a433ea.hires.jpg" /></a>
          <a href="categories/Decks"><CategoryTitle>
            <CategoryName>DECKS</CategoryName>
            <CategoryDescription>Find a beautiful board for yourself</CategoryDescription>
          </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          <a href="categories/Hoodies"><CategoryImage src="https://th-live-02.slatic.net/p/607286741c87019d609d6dfb06539d8f.jpg" /></a>
         <a href="categories/Hoodies"> <CategoryTitle>
            <CategoryName>HOODIES</CategoryName>
            <CategoryDescription>Warm and cozy</CategoryDescription>
          </CategoryTitle>
          </a>
        </CategoryContainer>
        <CategoryContainer>
          < a href="categories/Hats"><CategoryImage src="https://images.squarespace-cdn.com/content/v1/521e63c5e4b029c4890678a2/1434683598740-PBV4G364Z3O6P7W8XO22/o19+Deph+Casey+Stairs1+WEB.jpg?format=1000w" /></a>
         <a href="categrories/Hats"> <CategoryTitle>
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
