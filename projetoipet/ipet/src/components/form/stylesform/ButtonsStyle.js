import styled from "styled-components"

export const ButtonStyle = styled.button`
    padding: .5em;
    color: #222;
    font-weight: bold;
    background-color: green;
    border: none;
    margin: 1em 0;
    width: 170px;
    border-radius: 2px;
    transition: .5s all;    
    cursor: pointer;


    &:hover{
        background-color: #90ee90;
    }

`
/* herda todas os itens de buttonstyle */
export const ButtonLinkStyle = styled(ButtonStyle)`
    transition: 2s all;
    &:hover{
        background-color: #00fa9a;
    }
    a{
        text-decoration: none;
        color: #222;
    }
`