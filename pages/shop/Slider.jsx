import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height:100vh;
display:flex;
position: relative;
overflow: hidden;

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
z-index: 2;

`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform:translateX(${props=>props.slideIndex*-100}vw);
transition: all 1.5s ease;
`
const Slide=styled.div`
display:flex;
align-items:center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg}
`
const ImageContainer=styled.div`
height: 100%;

flex: 1;
`
const Image=styled.img`
height: 95%;
`

const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`
const Title= styled.h1`
font-size: 70px;

`
const Description= styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

`
 const sliderItems = [
    {
        id: 1,
        img: "https://5.imimg.com/data5/ANDROID/Default/2022/10/DI/JK/TQ/17476908/product-jpeg-500x500.jpg",
        title: "LATEST VANS COLLECTION", 
        description: "FRESHEST ONES ARE HERE",
        bg: "f5fafd"
    
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0020/1628/0646/products/santa-cruz-complete-skateboard-santa-cruz-8-79-serape-street-skate-complete-skateboard-cruiser-29739978358854.jpg?v=1667479761&width=960",
        title: "SKATEBOARD SETUPS",
        description:"30% OFF",
        bg: "fcf1ed"
    },
    {
        id: 3,
        img: "https://images.boardriders.com/global/element-products/all/default/hi-res/elyha00139_element,w_crh0_frt1.jpg",
        title: "FRESH HATS & BEANIES",
        desc: "PROTECT YOUR HEAD",
        bg: "fbf0f4",
      },
    ]


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick=(direction)=>{

    if (direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        

        
        <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map(item=>(
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer><Image src={item.img}/></ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOP NOW!</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider