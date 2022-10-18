
import {Label,Div,InputSty} from "./stylesform/InputStyle"


function Input({texto,tipo,handleOnChange,placeholder}){
    return(
        <Div>
            <Label htmlFor={texto.toLowerCase()}>{texto}</Label>
            <InputSty onChange={handleOnChange} name={texto.toLowerCase()} type={tipo}
            placeholder={placeholder}
            />
        </Div>
    )
}

export default Input