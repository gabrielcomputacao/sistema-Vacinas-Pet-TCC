
import styled from "styled-components"


export const DivCards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1.5em 0;

`
export const DivCard = styled.div`

    padding: .8em;
    margin: .5em;
    border: 1px solid gray;
    border-radius: 4px;
    width: 250px;
    height: auto;
    background-color: #C0C0C0;
    border-top: 5px solid #0a5f55 ;
`


export const DivSvg = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.8em;
    margin-top: .8em;
    svg{
        font-size: 54px;
        color: green;
    }
`

export const Pitens = styled.p`
    margin:.4em 0;

    span{
        font-weight: bold;
        font-size: 16px;
        color: #222;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

export const ButtonStyled = styled.button`
    padding: .2em;
    margin: .4em;
    :hover{
        background-color: #90ee90;
        border: 1px solid #222;
        border-radius: 2px;
    }
`

export const DivBut = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`