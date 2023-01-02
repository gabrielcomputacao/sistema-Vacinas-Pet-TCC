import { LabelSec, SelectionStyled,DivSelect } from "./stylesform/SelectionStyle";


function Selection({ name, text, options, handleOnChange,value }) {
  

  return (
    <DivSelect>
      <LabelSec htmlFor={name}>{text}</LabelSec>
      <SelectionStyled name={name} id={name} onChange={handleOnChange} >
        <option value="1" selected disabled={true}>
          Selecione ...
        </option>
        {options.map((op,index) => (
          <option value={op.nome} key={op.nome}>
            {op.nome}
          </option>
        ))}
      </SelectionStyled>
    </DivSelect>
  );
}

export default Selection;
