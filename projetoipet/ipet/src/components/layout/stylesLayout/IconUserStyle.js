import styled from "styled-components"

export const DivUsuario = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 200px;
    cursor: pointer;

    p{
        font-weight: bold;
        margin-left: .4em;
    }


    @media screen and (max-width:420px){
        display: none;
    }

`


export const DivIconUser = styled.div`
    background-color: #fff;
    border-radius: 50%;
    padding: .6em;
    text-align: center;
    svg{
        color: green;
        font-size: 18px;
        text-align: center;
        width: auto;
    }
`