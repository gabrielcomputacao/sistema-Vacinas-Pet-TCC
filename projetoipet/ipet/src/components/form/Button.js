import {ButtonStyle} from "./stylesform/ButtonsStyle"

function Button(props){
    return(
        <div>
            <ButtonStyle >{props.text}</ButtonStyle>
        </div>
    )   
}

export default Button