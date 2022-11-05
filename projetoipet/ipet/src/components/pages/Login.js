import Button from "../form/Button.js";
import ButtonLink from "../form/ButtonLink.js";
import Input from "../form/Input.js";
import { Section } from "./stylepages/LoginStyle.js";
import ipetImage from "../../img/ipet.png"
import fundoAnimais from "../../img/fundo_animais2.jpg"

import { useState } from "react";

function Login() {

    const [dados,setDados] = useState({})

    function obterDados(e){
        /* se nao fazer o destruicting nos dados o setdados so vai setar o ultimo valor que for preenchido
        com as ... ele separar e vai incluindo cada name como um atributo dentro do objeto dados
        */
        setDados({...dados,
        [e.target.name] : e.target.value})
        console.log(dados)
    }

    function submit(e){
        e.preventDefault();

        fetch("http://localhost:3005/login" , {
          method: "post",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dados)
        })

    }

  return (
    <Section fundo={fundoAnimais}>
      <div>
        <h1>Ipet | Sistema de Vacinação</h1>
       <div> 
        <form onSubmit={submit}>
            <img src={ipetImage} alt="Ipet | Sistema de Vacinação de Pet's" />
          <Input handleOnChange={obterDados} tipo="text" texto="Usuario" />
          <Input handleOnChange={obterDados} tipo="password" texto="Senha" />

          <div>
            <Button text="Continuar" />
            <ButtonLink tipo="button" text="Cadastrar" where="./cadastro"/>
          </div>
        </form>
      </div>
      </div>
    </Section>
  );
}

export default Login;
