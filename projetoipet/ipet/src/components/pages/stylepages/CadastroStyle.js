
import styled from "styled-components"

export const Section = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-image: url(${props => props.background});
    

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
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid green;
    }

    h1{
        font-size: 38px;
        color: green;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`