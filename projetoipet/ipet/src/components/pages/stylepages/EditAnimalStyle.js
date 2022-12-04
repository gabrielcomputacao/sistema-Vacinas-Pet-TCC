
import styled from "styled-components"

export const DivForm = styled.div`
    width: 700px;
    height: auto;
    background-color: #d3d3d3;
    
    position: absolute;
    z-index: 2;
    border-radius: 5px;
    top: 15%;
    left: 21%;

    @media screen and (max-width:1020px){
        left: 9%;
    }

    @media screen and (max-width: 780px) {
        max-width: 500px;
        left: 7%;
        margin: 0 0.7em;
    }
`


export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    

`


