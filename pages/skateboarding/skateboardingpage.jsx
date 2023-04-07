import styled from 'styled-components';

const SkateboardingPage = () => {
  return (
    <Container>
      <MainTitle/>
      <br/>
      <Section>
        <a href="/completes">
        <Image src="https://www.titus-shop.com/blog/fileadmin/_processed_/a/d/csm_0V2A6456_2fa83ff061.jpg" alt="Shop Completes" />
        </a>
        <a href="/completes">
        <Title>SHOP COMPLETES</Title>
        </a>
        <a href="/completes">
        <Subtitle>Assembled boards ready to skate</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
      <a href="/decks">
        <Image src="https://www.jenkemmag.com/home/wp-content/uploads/2022/06/nickhalkias3.jpg" alt="Shop Decks" />
        </a>
        <a href="/decks">
        <Title>SHOP DECKS</Title>
        </a>
        <a href="/decks">
        <Subtitle>Wide selection of boards</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/trucks">
        <Image src="https://www.skatedeluxe.com/blog/wp-content/uploads/2017/01/trucks-skateboard-wiki-600x400.jpg" alt="Shop Trucks" />
        </a>
        <a href="/trucks">
        <Title>SHOP TRUCKS</Title>
        </a>
        <a href="/trucks">
        <Subtitle>Greatest trucks for your boards</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/wheels">
        <Image src="https://img.skatewarehouse.com/watermark/rsg.php?path=/content_images/wheelarticle/wheelselection.jpg&nw=780" alt="Shop Wheels" />
        </a>
        < a href="/wheels">
        <Title>SHOP WHEELS</Title>
        </a>
        < a href="/wheels">
        <Subtitle>Keep it rolling</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/bearings">
        <Image src="https://www.jenkemmag.com/home/wp-content/uploads/2021/04/IMG_0309.jpg" alt="Shop Bearings" />
        </a>
        <a href="/bearings">
        
    <Title>SHOP BEARINGS</Title>
    </a>
    <a href="/bearings">
        <Subtitle>Show them some speed</Subtitle>
        </a>
      </Section>
      <br/>
      <Section>
        <a href="/stuff">
        <Image src="https://i.pinimg.com/736x/4a/db/ab/4adbabd029ce58044fc41fd32f2d0d06--longboarding-skateboarding.jpg" alt="Shop Skate Essentials" />
        </a>
        <a href="/stuff">
        <Title>SHOP SKATE ESSENTIALS</Title>
        </a>
        <a href="/stuff">
        <Subtitle>All extras you need</Subtitle>
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

export default SkateboardingPage;
