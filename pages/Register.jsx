import styled from "styled-components";
import {mobile} from "../responsive"

const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://cdn.wallpapersafari.com/20/21/HgV2tM.jpg") center;
background-size: cover;
display: flex; 
align-items: center; 
justify-content: center;
`
const Wrapper=styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({width:"75%"})}
`
const Form=styled.form`
display: flex;
flex-direction: column;
`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px; 
padding: 10px;
`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button=styled.button`
width: 40%; 
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="name"></Input>
                <Input placeholder="last name"></Input>
                <Input placeholder="username"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="password"></Input>
                <Input placeholder="confirm password"></Input>
                <Agreement>By creating a personal account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY </b></Agreement>
                <Button>Create</Button>

            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register