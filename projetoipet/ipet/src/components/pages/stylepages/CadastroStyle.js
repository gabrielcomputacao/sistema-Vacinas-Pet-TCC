
import styled from "styled-components"

export const Section = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-image: url(${props => props.background});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #a8bfa0;

    > div{
        border: 1px solid green;
        width: 600px;
        padding: 1.5em 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 2px;
        background-color: #fff;
        margin: 1em;
    }

    img{
        width: 200px;
        height: 100px;
        margin-bottom: .4em;
        
    }

    h1{
        font-size: 38px;
        color: green;
    }

    h3{
        margin-bottom: .8em;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    @media screen and (max-width:650px){
        > div{
            width: 95%;
        }
        h1{
            text-align: center;
            margin: 1em 0 .3em 0;
        }
    }

`

export const SelectionCadastro = styled.select`
    padding: .4em;
    margin: 1.5em 0;
    border: 1px solid green;
    border-radius: 5px;
    transition: 1s all;
    min-width: 180px;
`