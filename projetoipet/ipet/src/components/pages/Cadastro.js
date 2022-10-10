import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import {Section} from "./stylepages/CadastroStyle"
import gato from "../../img/gato.jpg"
import fundo from "../../img/fundo_animais2.jpg"

function Cadastro() {

    const [dadosCadastro,setDadosCadastro] = useState({})

    function submitCadastro(e){
        e.preventDefault()
        console.log(dadosCadastro)
    }

    function cadastrarDados(e){
        setDadosCadastro({...dadosCadastro,
            [e.target.name] : e.target.value})
    }

  return (
    <Section background={fundo}>
      <div>
        <img src={gato} alt="Ipet | Cadastro" />
        <h1>Cadastro  Ipet</h1>
        <form onSubmit={submitCadastro}>
          <Input handleOnChange={cadastrarDados} tipo="text" texto="Nome" />
          <Input handleOnChange={cadastrarDados} tipo="text" texto="Nickname" />
          <Input handleOnChange={cadastrarDados} tipo="email" texto="Email" />
          <Input handleOnChange={cadastrarDados} tipo="text" texto="Telefone" />
          <Input handleOnChange={cadastrarDados} tipo="number" texto="Idade" />

          <Button text="Cadastrar" />
        </form>
      </div>
    </Section>
  );
}

export default Cadastro;
