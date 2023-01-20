
import styled from "styled-components"

export const ConfirmationPosition = styled.div`
    display: ${props => props.visible};
    position: absolute;
    right: 10%;
    top: 20%;
    transition: all 1s;
`

export const DesignConfirmation = styled.div`
    
        border: 1px solid #292929;
        border-radius: 5px;
        padding: 1em;
        background-color: #f5f6fa;
        z-index: 3;
        border-color: #fff;
        border-top-width: 4px;
        border-top-color: ${props => props.cores ? 'green' : 'red'};
`



