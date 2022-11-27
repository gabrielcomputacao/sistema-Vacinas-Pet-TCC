
import {LabelSec,SelectionStyled} from "./stylesform/SelectionStyle"

function Selection({name,text,options,handleOnChange,value}){
    return(
        <div>
            <LabelSec htmlFor={name}>{text}</LabelSec>
            <SelectionStyled name={name} id={name} onChange={handleOnChange}>
                <option value="1" selected disabled={true} >Selecione ...</option>
                {
                    options.map( (op)=> (
                        <option value={op.nome} key={op.nome}>
                            {op.nome}
                        </option>
                    ) )
                }
            </SelectionStyled>
        </div>
    )
}


export default Selection;