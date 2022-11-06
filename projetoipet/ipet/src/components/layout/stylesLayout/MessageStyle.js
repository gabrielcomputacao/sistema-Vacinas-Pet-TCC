import styled from "styled-components"


export const SpanMessage = styled.span`
    display: block;
    color: #222;
    font-weight: bold;
    width: 350px;
    height: auto;
    border-radius: 5px;
    font-size: 22px;
    padding: 1em;
    text-align: center;
`

export const Sucess = styled(SpanMessage)`
    background-color: #78cc78;
    transition: 1s all;
    opacity: .6;
`

export const Danger = styled(SpanMessage)`
    background-color: red;
    transition: 1s all;
    opacity: .9;
`