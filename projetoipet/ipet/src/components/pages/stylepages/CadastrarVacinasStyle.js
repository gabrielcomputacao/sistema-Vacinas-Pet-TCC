

import styled from "styled-components"

export const SectionMain = styled.section`
    h1{
        text-align: center;
        font-size: 38px;
    }
`


export const FormFlex = styled.form`

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    margin: 2em auto;
    flex-direction: column;

    @media screen and (max-width:630px) {
        width: 100%;
    }
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: row;

`



