import {FaUser} from "react-icons/fa"
import {DivIconUser,DivUsuario} from "./stylesLayout/IconUserStyle"
import {useSelector} from "react-redux"
import {selectUser} from "../../redux/slice"
import { useState } from "react"

function IconUser({clicar}){

    const state = useSelector(selectUser)
    const letraMaiuscula = state.nome[0].toUpperCase();
    const restante = state.nome.substring(1);
    const [estadovisivel,setEstadoVisivel] = useState(false);

    function mudarEstado(){
        clicar(!estadovisivel)
        setEstadoVisivel(!estadovisivel)
    }

    return(
        <DivUsuario onClick={mudarEstado}>
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