import styled from 'styled-components'
import { FaTrash, FaRegThumbsUp } from "react-icons/fa6";

export const Container = styled.div`
        background: linear-gradient(90deg, #383838 0% , #000000 81.25% ) ;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
`
export const Paragrafo = styled.p`
        text-align: center;
        color: #ff0000;
        font-size: 25px;
`

export const TodoList = styled.div`
        
        background-color: #FFFF;
        padding: 30px 20px;
        border-radius: 5px;
        max-width: 80%;
        overflow: hidden;

   ul{
        padding: 0;
        margin-top: 60px;
       
    }
   div{
        display: flex;
   } 

   @media (max-width: 800px){
        div {
                width: 100%;
        }
   }
   
`
export const Input = styled.input`
        
        border: 2px solid rgba(209, 211, 212, 0.4);
        border-radius: 5px;
        height: 40px;
        width: 342px;
        margin-right: 40px;
        padding: 0 10px;

`
export const Button = styled.button`
        
        background: #8052ec;
        border-radius: 5px;
        width: 130px;
        color: #fff;
        border: none;
        height: 40px;
        font-size: 17px;
        line-height: 2px;
        font-weight: 900;
        justify-content: center;
        align-items: center;
        cursor: pointer;
         &:hover {
        opacity: 0.8;
         }
        &:active {
        opacity: 0.4;
        }
`
export const ListItem = styled.div`
        
        background: ${props => props.$isFinished ? "#e8ff8b" : "#e4e4e4"};
        
        

        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
        padding: 15px;
        display: flex;
        height: 60px;
        width: 500px;
        max-width: 90%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        gap: 20px;
     li{
         list-style-type: none;
     }   
`

export const Lixeira = styled(FaTrash)`
        cursor: pointer;
`
export const Check = styled(FaRegThumbsUp)`
        cursor: pointer;
`
