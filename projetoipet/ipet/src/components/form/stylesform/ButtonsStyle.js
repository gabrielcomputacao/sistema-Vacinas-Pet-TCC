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
`
/* herda todas os itens de buttonstyle */
export const ButtonLinkStyle = styled(ButtonStyle)`
    transition: 2s all;
    &:hover{
        background-color: blue;
    }
    a{
        text-decoration: none;
        color: #222;
    }
`