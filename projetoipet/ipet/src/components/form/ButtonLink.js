import { Link } from "react-router-dom"
import { ButtonLinkStyle } from "./stylesform/ButtonsStyle"


function ButtonLink({text,tipo,where}){
    return(

        <ButtonLinkStyle type={tipo}>
            <Link to={where}>{text}</Link>
        </ButtonLinkStyle>
    )
}

export default ButtonLink