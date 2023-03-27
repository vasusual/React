import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
position: relative;
`
const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
height: 100%;
`
const Slide=styled.div`
display:flex;
align-items:center;
width: 100vw;
height: 100vh;
`
const ImageContainer=styled.div`
height: 100%;

flex: 1;
`
const Image=styled.image`
height: 80%;
`

const InfoContainer=styled.div`
flex: 1;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImageContainer><Image src="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></ImageContainer>
            <InfoContainer></InfoContainer>
            </Slide>

        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider