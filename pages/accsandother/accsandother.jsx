import styled from "styled-components";

const AccsAndOtherPage = () => {
  return (
    <Container>
      <MainTitle />
      <br />
      <Section>
        <a href="/category/Bags">
          <Image
            src="https://cdn.shopify.com/s/files/1/1734/4153/products/7W4A3299.jpg?v=1658335039"
            alt="Shop Accessories"
          />
        </a>
        <a href="/category/Bags">
          <Title>SHOP Bags</Title>
        </a>
        <a href="/category/Bags">
          <Subtitle>BackPacks, Pouch bags, FannyPacks and other</Subtitle>
        </a>
      </Section>
      <br />
      <Section>
        <a href="/category/Accessories">
          <Image
            src="https://www.colorskates.com/images/products/2021/06/Thrasher_Accessories_NZ6_0793.jpg"
            alt="Shop Accessories"
          />
        </a>
        <a href="/category/Accessories">
          <Title>SHOP ACCESSORIES</Title>
        </a>
        <a href="/category/Accessories">
          <Subtitle>Other Essential Items</Subtitle>
        </a>
      </Section>
      <br />
      <Section>
        <a href="/category/Other">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/596e694e37c581db7dccc942/1503289325220-5O7FE7NWOCYK0M5PFCZ7/IMG_9627.JPG"
            alt="Shop Decks"
          />
        </a>
        <a href="/category/Other">
          <Title>SHOP OTHER</Title>
        </a>
        <a href="/category/Other">
          <Subtitle>Stickers, keychain, pins,etc.</Subtitle>
        </a>
      </Section>
    </Container>
  );
};

const MainTitle = styled.h1`
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  position: relative;
  width: calc(33.33% - 60px);
  height: 360px;
  margin: 0 30px;
`;

const Image = styled.img`
  width: 160%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 2rem;
  z-index: 1;
`;

const Subtitle = styled.h2`
  position: absolute;
  padding-top: 50px;
  top: 70%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  z-index: 1;
`;

export default AccsAndOtherPage;
