
import {LabelSec,SelectionStyled} from "./stylesform/SelectionStyle"

function Selection({name,text,options,handleOnChange,value}){
    return(
        <div>
            <LabelSec htmlFor={name}>{text}</LabelSec>
            <SelectionStyled name={name} id={name} onChange={handleOnChange}>
                <option value="1" disabled={true}>Selecione ...</option>
                <option value="2">opt2</option>
                <option value="2">opt3</option>
            </SelectionStyled>
        </div>
    )
}


export default Selection;