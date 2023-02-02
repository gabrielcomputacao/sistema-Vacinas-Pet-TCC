import { Link } from "react-router-dom"
import { ButtonLinkStyle } from "./stylesform/ButtonsStyle"


function ButtonLink({text,tipo,where}){
    return(
        <Link to={where}>
        <ButtonLinkStyle type={tipo}>
            {text}
        </ButtonLinkStyle>
        </Link>
        
    )
}

export default ButtonLink