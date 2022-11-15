import {FaUser} from "react-icons/fa"
import {DivIconUser,DivUsuario} from "./stylesLayout/IconUserStyle"
import {useSelector} from "react-redux"
import {selectUser} from "../../redux/slice"

function IconUser(){

    const state = useSelector(selectUser)
    const letraMaiuscula = state.nome[0].toUpperCase();
    const restante = state.nome.substring(1);
    

    return(
        <DivUsuario>
            <DivIconUser>
                <FaUser/>
            </DivIconUser>
            <p>
                {`${letraMaiuscula}${restante}`}
            </p>
        </DivUsuario>
    )
}

export default IconUser