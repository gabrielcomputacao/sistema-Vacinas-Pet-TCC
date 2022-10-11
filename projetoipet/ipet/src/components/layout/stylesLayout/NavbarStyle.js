import styled from "styled-components"


export const DivNavbar = styled.div`
    height: 80px;
    width: 100%;
    background-color: green;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 2.5em;
`

export const Imagem = styled.img`
    width: 100px;
    height: 60px;
    padding: .5em;
`

export const Navegacao = styled.nav`

    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        margin-right: 3em;
    }
    li{
        margin: 0 1.6em;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 700;

        &:hover{
            color: black;
        }
    }
`
