import styled from "styled-components"


export const DivFlex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.5em .5em 1em .5em;

    img{

        @media screen and (max-width:500px){
            width: 95%;
        }

    }
`

export const DivContent = styled.div`
    width: 45%;

    h1{
        font-size: 35px;
        margin-bottom: .5em;
    }

    div p{
        line-height: 24px;
        text-align: justify;
    }

    @media screen and (max-width:780px) {
        width: 95%;
        margin: 1em 0;
    }

`
export const DivHaveAnimal = styled.div`
    padding: .5em;
    background-color: #ddfada;
    border-radius: 5px;
`

export const DivNotHaveAnimal = styled(DivHaveAnimal)`
    background-color: #d69796;
    font-weight: bold;

`




