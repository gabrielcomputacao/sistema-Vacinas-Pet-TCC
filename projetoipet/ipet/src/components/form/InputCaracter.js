
import {Label,Div,InputSty} from "./stylesform/InputStyle" 


function InputCaracter({texto,textoNome ,tipo,handleOnChange,placeholder}){
    return(
        <Div>
            <Label htmlFor={texto.toLowerCase()}>{texto}</Label>
            <InputSty onChange={handleOnChange} name={textoNome} type={tipo}
            placeholder={placeholder}
            />
        </Div>
    )
}

export default InputCaracter

