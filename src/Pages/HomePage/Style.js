import { resolvePath } from "react-router-dom";
import styled from "styled-components"; 

export const CardModal= styled.div`
display: grid;

grid-template-columns: 1fr 1fr 1fr 1fr;
width: 100px;

position: absolute;
left: 440px;

`

export const Card = styled.div`
    width: 10.5vw;
    border: 1px solid black;

    img {
        width: 180px;
        height: 180px;
        object-fit: fill;
        
    }


` 

export const Div = styled.div`
display: flex;
justify-content: space-between;
align-itens: flex-start;
`

export const Button = styled.button`
width: 65px;
height: 50px;
object-fit: fill;
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


