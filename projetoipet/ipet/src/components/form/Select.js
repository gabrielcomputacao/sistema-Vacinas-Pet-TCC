import { LabelSec, SelectionStyled } from "./stylesform/SelectionStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Selection({ name, text, options, handleOnChange, value }) {
  const stateUser = useSelector((state) => state.usercheck);
  const iduser = stateUser.iduser;
  const [nomes, setNomes] = useState([]);

  useEffect(() => {

    const selectProprietarios = async ()=>{
      const response = await fetch(`http://localhost:3005/getpropnomes/${iduser}`);
      const responseJson = await response.json();

      /* console.log(responseJson) */
      setNomes(responseJson);
    }

    selectProprietarios();


    /* fetch(`http://localhost:3005/getpropnomes/${iduser}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNomes(data.rows);
        console.log(data.rows);
        /* console.log(nomes) 
      })
      .catch((ex) => console.log(ex)); */
  }, []);

  return (
    <div>
      <LabelSec htmlFor={name}>{text}</LabelSec>
      <SelectionStyled name={name} id={name} onChange={handleOnChange}>
        <option value="1" selected disabled={true}>
          Selecione ...
        </option>
        {nomes.map((op) => (
          <option value={op.nome} key={op.nome}>
            {op.nome}
          </option>
        ))}
      </SelectionStyled>
    </div>
  );
}

export default Selection;
