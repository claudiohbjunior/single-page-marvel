import { resolvePath } from "react-router-dom";
import styled from "styled-components"; 


 




export const Div2 = styled.div`
    display: flex;
    

`

export const Teste = styled.div`
display: grid;

grid-template-columns: 1fr 1fr 1fr 1fr;
width: 100px;
`

export const Card = styled.div`
    width: 14vw;
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
export const ModalOverlay = styled.div`
background: white;
position: fixed;
top: 0;
bottom: 0;
rigth: 0;
left: 0;

display: flex;
align-itemns: center;
justify-content: center;
`

