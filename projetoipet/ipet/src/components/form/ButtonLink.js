import { Link } from "react-router-dom"
import { ButtonLinkStyle } from "./stylesform/ButtonsStyle"


function ButtonLink({text,tipo}){
    return(

        <ButtonLinkStyle type={tipo}>
            <Link to="./cadastro">{text}</Link>
        </ButtonLinkStyle>
    )
}

export default ButtonLink