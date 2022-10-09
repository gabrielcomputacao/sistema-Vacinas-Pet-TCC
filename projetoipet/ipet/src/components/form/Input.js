
import {Label,Div,InputSty} from "./stylesform/InputStyle"


function Input({texto,tipo,handleOnChange}){
    return(
        <Div>
            <Label htmlFor={texto.toLowerCase()}>{texto}</Label>
            <InputSty onChange={handleOnChange} name={texto.toLowerCase()} type={tipo} />
        </Div>
    )
}

export default Input