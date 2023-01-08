
import styled from "styled-components"

export const DivImgContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;

    img{
        width: 40%;
        border-radius: 10px;


        @media screen and (max-width:990px){
            display: none;
        }
    }



`

export const DivCampos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 60%;

    div{
        align-self: flex-start;
    }
`

export const SecEnd = styled.section`
    background-image: url(${props => props.back});
    width: 100vw;
    height: 100vh;
    padding-top: 4em;
`


export const DivEndereco = styled.div`
        width: 80%;
        margin: 0 auto;
        border: 1px solid black;
        padding: 1em;
        border-radius: 5px;
        background-color: #fff;
`


