import { Link } from "react-router-dom"
import styled from "styled-components"


export const DivStyle = styled.div`
    color: #222;
    background-color: #d7d9d9;
    height: 60px;
    width: 100px;
    position: absolute;
    top: 4%;
    right: 10%;
    border-radius: 5px;
    padding: .4em;
    

`

export const Pstyle = styled.p`
    background-color: #f5f6fa;
    padding: .2em;
    border-radius: 2px;
    cursor: pointer;

    :hover{
        background-color:  #0a5f55;
        color: white;
    }

`

export const LinkStyle = styled(Link)`
   text-decoration: none;
`