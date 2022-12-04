
import {Label,Div,InputSty} from "./stylesform/InputStyle"


function Input({texto,tipo,handleOnChange,placeholder,value}){
    return(
        <Div>
            <Label htmlFor={texto.toLowerCase()}>{texto}</Label>
            <InputSty onChange={handleOnChange} name={texto.toLowerCase()} type={tipo}
            placeholder={placeholder} value={value}
            />
        </Div>
    )
}

export default Input