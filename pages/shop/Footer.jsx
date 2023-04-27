import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  display: flex;
  align-items: center; 
  justify-content: center;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    padding: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ListItem = styled.li`
  flex-basis: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 80%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>OCTOPUS</Logo>
        <img src="https://i.pinimg.com/564x/eb/aa/2c/ebaa2c517a8777c27f2a541c75a7b1f5.jpg" style={{display: 'flex',width: '70px', height: '70px', alignItems: 'center', justifyContent: 'center'}} />
        <Desc>
          OCTOPUS is an OG skateshop from Moscow, Russia. Found in 2023 to
          support local skateboarders and giving positive influence to the
          culture of youngsters in general. Best celection of skate goods and
          clothing from all over the world.KEEP PUSHING.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
           <a href="https://www.facebook.com"><Facebook /></a> 
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a href="https://www.instagram.com"><Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
           <a href="https://www.twitter.com"> <Twitter /></a>
          </SocialIcon>
          <SocialIcon color="E60023">
           <a href="https:/www.pinterest.com"> <Pinterest /></a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <a href="/"><ListItem>Home</ListItem></a>
          <a href="/cart"><ListItem>Cart</ListItem></a>
          <a href="/category/SkateStuff"><ListItem>Skate Stuff</ListItem></a>
          <a href="/category/Shoes"><ListItem>Shoes</ListItem></a>
          <a href="/apparel"><ListItem>Apparel</ListItem></a>
          <a href="category/Accessories"><ListItem>Accessories</ListItem></a>
          <a href="/user"><ListItem>My account</ListItem></a>
          <a href="/orders"><ListItem>Order tracking</ListItem></a>
          <a href="/wishlist"><ListItem>Wishlist</ListItem></a>
          <a href="/terms"><ListItem>Terms</ListItem></a>
          <a href="/contacts"><ListItem>Contact us</ListItem></a>
        </List>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> Ulitsa Pushkina, 42/2,
          102332, Moscow
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} />
          +74954954995
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{ marginRight: "10px" }} />
          skate@shop.com
        </ContactItem>
        <Payment src="https://s3.amazonaws.com/rpower-marketing-assets/Public/Mobile+Pay+Solutions.png" />
      </Right>
    </Container>
  );
};

export default Footer;
