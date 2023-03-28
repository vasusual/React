import {  Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from "@mui/icons-material"
import styled from "styled-components"
const Container=styled.div`
display:flex;
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction: column;
padding: 20px;

`

const Logo=styled.h1``
const Desc = styled.p`
margin: 20px 0px;

`
const SocialContainer=styled.div`
display: flex;
`
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

const Center=styled.div`
flex:1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom: 30px;

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;

`
const Right=styled.div`
flex:1;
padding: 20px;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex; 
align-items: center;
`
const Payment=styled.img`
width: 80%;

`


const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>SKATE.</Logo>
        <Desc>SKATE. is an OG skateshop from Moscow, Russia. Found in 2023 to support local skateboarders and giving positive influence to the culture of youngsters in general. Best celection of skate goods and clothing from all over the world.KEEP PUSHING.SKATE.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
                </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
                </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
                </SocialIcon>
            <SocialIcon color = "E60023">
                <Pinterest/>
                </SocialIcon>

        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Skate Stuff</ListItem>
                <ListItem>Shoes</ListItem>
                <ListItem>Apparel</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Contact us</ListItem>


            </List>
        </Center>
        <Right>
            <Title>Contact </Title>
            <ContactItem> <Room style={{marginRight:"10px"}}/> Ulitsa Pushkina, 42/2, 102332, Moscow</ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}}/>+74954954995</ContactItem>
            <ContactItem> <MailOutline style={{marginRight:"10px"}}/>skate@shop.com</ContactItem>
            <Payment src="https://s3.amazonaws.com/rpower-marketing-assets/Public/Mobile+Pay+Solutions.png"/>
        </Right>

    </Container>
  )
}

export default Footer