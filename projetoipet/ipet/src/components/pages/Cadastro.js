import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import {Section} from "./stylepages/CadastroStyle"
import gato from "../../img/gato.jpg"
import fundo from "../../img/fundo_animais2.jpg"
import Message from "../layout/Message"

function Cadastro() {


    const [message , setMessage] = useState()
    const [dadosCadastro,setDadosCadastro] = useState({})

    function submitCadastro(e){
        e.preventDefault()
        fetch('http://localhost:3005/cadastrousuario',{
          method:'post',
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dadosCadastro)
        }).then( res => res.json())
        .then( text => {
          console.log(text)
          setMessage('Cadastrado com Sucesso!')
          return true
        })
        .catch( error => console.log(error))


    }

    function cadastrarDados(e){
        setDadosCadastro({...dadosCadastro,
            [e.target.name] : e.target.value})
    }

  return (
    <Section background={fundo}>
      {message && <Message msg={message}></Message>}
      <div>
        <img src={gato} alt="Ipet | Cadastro" />
        <h1>Cadastro  Ipet</h1>
        <form onSubmit={submitCadastro}>
          <Input handleOnChange={cadastrarDados} tipo="text" texto="Nome" />
         <Input handleOnChange={cadastrarDados} tipo="email" texto="Email" />
          <Input handleOnChange={cadastrarDados} tipo="password" texto="Senha" />
          <Input handleOnChange={cadastrarDados} tipo="text" texto="Tipo" />

          <Button text="Cadastrar" />
        </form>
      </div>
    </Section>
  );
}

export default Cadastro;
