
import styled from "styled-components";


export const DivConfirm = styled.div`
    display: block;
    position: absolute;
    border: 1px solid black;
    padding: 1em;
    border-radius: 2px;
    background-color: #90ee90;
    z-index: 2;
    left: 38%;
    top: 38%;
    width: 250px;

    h3{
        margin-bottom: 1em;
        text-align: center;
        font-size: 16px;
    }

    button{
        padding: .4em .8em;
        font-size: 14px;
        margin: 0 2em;

        :hover{
            background-color: green;
            font-weight: bold;
            color: #fff;
            border: 1px solid #fff;
        }
    }

`

