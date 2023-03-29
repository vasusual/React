import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import styled from "styled-components"
import { Add, Remove } from "@mui/icons-material"
import {mobile} from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  outline: 1px solid black;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer > 
            <Image src="https://cdn.lookastic.com/black-suede-low-top-sneakers/stefan-janoski-trainers-in-black-333824-026-original-9013827.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>NIKE SB STEFAN JANOSKI</Title>
                <Desc>Suede shoes made specially for skating. Comfortable, stylish and affortable. Gives you +100 on steeze and +200 on 360flips</Desc>
                <Price>60$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="blue"/>
                        
                        <FilterColor color="white"/>
                    </Filter>
                    <Filter>

                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>

                            <FilterSizeOption>6</FilterSizeOption>
                            <FilterSizeOption>6.5</FilterSizeOption>
                            <FilterSizeOption>7</FilterSizeOption>
                            <FilterSizeOption>7.5</FilterSizeOption>
                            <FilterSizeOption>8</FilterSizeOption>
                            <FilterSizeOption>8.5</FilterSizeOption>
                            <FilterSizeOption>9</FilterSizeOption>
                            <FilterSizeOption>9.5</FilterSizeOption>
                            <FilterSizeOption>10</FilterSizeOption>
                            <FilterSizeOption>10.5</FilterSizeOption>
                            <FilterSizeOption>11</FilterSizeOption>
                            <FilterSizeOption>11.5</FilterSizeOption>
                            <FilterSizeOption>12</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>

    </Container>
  )
}

export default Product