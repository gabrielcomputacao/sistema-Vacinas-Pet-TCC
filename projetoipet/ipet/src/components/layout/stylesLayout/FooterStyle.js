import styled from "styled-components"

export const DivFooter = styled.div`
    padding: 1.5em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    background-color: #00975c;

    @media screen and (max-width:780px){
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }


`

export const Imagem = styled.img`
    width: 90px;
    height: 60px;
    mix-blend-mode: multiply;

`

export const DivTexto = styled.div`
    width: 30%;

    h4{
        font-size: 18px;
        padding-bottom: .5em;
    }
    p{
       font-size: 14px;  
       line-height: 18px;
    }

    @media screen and (max-width:780px){
        width: 92%;
        margin: 2em 0;
    }

`

export const DivContatos = styled.div`

    h4{
        text-align: center;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    li{
        margin: 1em .4em;
    }

    ul li a svg,
    ul li a{
        color: #222;
        cursor: pointer;
        font-size: 1.3em;
    }
    
`

export const Copy = styled.p`
    color: #fff;
    background-color:#292929;
    text-align: center;
    padding: .4em;

`



