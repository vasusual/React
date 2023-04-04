import styled from 'styled-components';

const ApparelPage = () => {
  return (
    <Container>
      <MainTitle/>
      <Section>
        <a href="/tshirts">
        <Image src="https://cdn.shopify.com/s/files/1/0550/9555/8293/products/86.png?v=1637044870" />
        </a>
        <a href="/tshists">
        <Title>SHOP T-SHIRTS</Title>
        </a>
        <a href="/tshirts">
        <Subtitle>Biggest Selection</Subtitle>
        </a>
      </Section>
      <br/>
      
      <Section>
      <a href="/hoodies">
        <Image src="https://i.pinimg.com/originals/e2/9f/4c/e29f4cc8ae6996bf3a5a8092f9a9e22e.jpg" />
        </a>
        <a href="/hoodies">
        <Title>SHOP HOODIES</Title>
        </a>
        <a href="/hoodies">
        <Subtitle>Warm and Cozy</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/pants">
        <Image src="https://cdn.shopify.com/s/files/1/0497/3169/8842/products/unnamed_2ee61ef6-b716-4ae6-a2eb-3453184ac91a_1200x1200.jpg?v=1630500146" />
        </a>
        <a href="/pants">
        <Title>SHOP Pants</Title>
        </a>
        <a href="/pants">
        <Subtitle>Cargos, Jeans and Trousers</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/jackets">
        <Image src="https://dickies.lotsthailand.com/media/catalog/product/cache/61d696f0f6ea7b507383fb3cccf3fb19/2/0/20211113-dk_30994.png" />
        </a>
        < a href="/jackets">
        <Title>SHOP JACKETS</Title>
        </a>
        < a href="/jackets">
        <Subtitle>Get covered</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/hats">
        <Image src="https://images.vans.com/is/image/Vans/VN000UM2_5RJ_HERO?hei=1024&wid=1024&qlt=95" />
        </a>
        <a href="/hats">
        
    <Title>SHOP HATS</Title>
    </a>
    <a href="/hats">
        <Subtitle>Protect your head</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/women">
        <Image src="https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dw41705b8d/tillys/images/catalog/1000x1000/383165100.jpg" />
        </a>
        <a href="/women">
        <Title>SHOP WOMEN</Title>
        </a>
        <a href="/women">
        <Subtitle>For the lovely ladies</Subtitle>
        </a>
      </Section>
      <br/>
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

export default ApparelPage;
