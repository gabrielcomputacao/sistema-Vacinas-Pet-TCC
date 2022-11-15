import Button from "../form/Button";
import Input from "../form/Input";
import img_proprietario from "../../img/proprietario.webp"
import {DivFlexProp} from "./stylepages/ProprietarioStyle"
import { useState } from "react";



function Proprietario() {

  const [proprietario , setProprietario] = useState({})

  function handleDadosProprietario (e){
      setProprietario({
        ...proprietario,
        [e.target.name] : e.target.value
      })
  }

  function submitProprietario(e){
    e.preventDefault()

    console.log(proprietario)


  }

  return (
    <section>
      <h1> Proprietário</h1>
      <DivFlexProp>
        <div>
          <form onSubmit={submitProprietario}>
          <Input
            texto="Nome"
            tipo="text"
            placeholder="Digite seu nome"
            handleOnChange={handleDadosProprietario}
          />

          <Input
            texto="CPF"
            tipo="text"
            placeholder="333.333.333-28"
            handleOnChange={handleDadosProprietario}
          />

          <Input
            texto="Telefone"
            tipo="text"
            placeholder="(33) 933333333"
            handleOnChange={handleDadosProprietario}
          />

          <Input
            texto="Obs"
            tipo="text"
            placeholder="Observações"
            handleOnChange={handleDadosProprietario}
          />
          <Button text="Enviar" />
        </form>
        </div>
        <img src={img_proprietario} alt="Dono de Animais" title="Dono de Animais" />
      </DivFlexProp>
      
    </section>
  );
}

export default Proprietario;
