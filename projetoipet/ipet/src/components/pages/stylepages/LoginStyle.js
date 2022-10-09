import styled from "styled-components"


export const Section = styled.section`

    position: relative;
    background-image: url(${props => props.fundo});
    height: 100vh;

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        position: relative;
        top: 100px;
    }

    form{
        display: flex;
        border: 1px solid green;
        align-items: center;
        flex-direction: column;
        padding: .5em;
        margin: 1em 0;
        width: 350px;
        height: auto;
        background-color: #fff;
        border-radius: 2px;

        img{
            width: 200px;
            height: 100px;
        }
    }

    h1{
        text-align: center;
        color: green;
        font-size: 42px;
    }
`