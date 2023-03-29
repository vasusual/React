import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import {mobile} from"../responsive"

const Container=styled.div`

`
const Title=styled.h1`
margin:20px;

`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;

`
const Filter=styled.div`
margin: 20px;
${mobile({width: "0px 20px", display:"flex", flexDirection:"column"})}
`
const Filtertext=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})}
`
const Select=styled.select`
padding: 10px;
margin-right: 20px;

`
const Option=styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>T-Shirts</Title>
        <FilterContainer>
            <Filter>
                <Filtertext>Filter Products:</Filtertext>
                <Select>
                <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Grey</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Red</Option>
                    <Option>Brown</Option>
                    <Option>Yellow</Option>
                    <Option>Purple</Option>
                    <Option>Pink</Option>
                    <Option>Other</Option>

                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XXS</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>Plus sizes</Option>
                </Select>
                </Filter>
            <Filter>
                <Filtertext>Sort Products:</Filtertext>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>

                </Select>
                
                </Filter>


        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>

    </Container>
  )
}

export default ProductList