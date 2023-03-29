import styled from "styled-components"
import {css} from "styled-components"

export const moblie=(props) =>{
return css`
@media only screen and (max-width: 380px){
    ${props}
}
`
}