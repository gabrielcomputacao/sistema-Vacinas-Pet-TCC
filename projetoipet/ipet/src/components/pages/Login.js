import Button from "../form/Button.js";
import ButtonLink from "../form/ButtonLink.js";
import Input from "../form/Input.js";
import { Section } from "./stylepages/LoginStyle.js";
import ipetImage from "../../img/ipet.png";
import fundoAnimais from "../../img/fundo_animais2.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

import Message from "../layout/Message";
import { checkinUser } from "../../redux/slice.js";

function Login() {
  const navigate = useNavigate();
  const [dados, setDados] = useState({});
  const [stateMessage, setStateMessage] = useState(false);
  const [unidadeMessage, setUnidadeMessage] = useState(0);

  const dispatch = useDispatch()

  function obterDados(e) {
    /* se nao fazer o destruicting nos dados o setdados so vai setar o ultimo valor que for preenchido
        com as ... ele separar e vai incluindo cada name como um atributo dentro do objeto dados
        */
    setDados({ ...dados, [e.target.name]: e.target.value });
    console.log(dados);
  }

  function submit(e) {
    e.preventDefault();

    fetch("http://localhost:3005/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        if (data.rowCount === 1) {
          setStateMessage(true);
          setUnidadeMessage(1);
          dispatch(checkinUser({
            name: data.rows[0].nome,
            idusuario : data.rows[0].id,
          }))
          setTimeout(()=>{
              setStateMessage(false)
                navigate("/dashboard")
              } , 2000)
        } else {
          setStateMessage(true);
          setUnidadeMessage(2);
          setTimeout(()=>{
            setStateMessage(false)
          },1600)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Section fundo={fundoAnimais}>
      <div>
        {stateMessage && unidadeMessage == 1 && (
          <Message msg="Login efetuado com Sucesso!" tipo="sucesso"></Message>
        )}
        {stateMessage && unidadeMessage == 2 && (
          <Message msg="Senha ou password incorretos" tipo="danger"></Message>
        )}

        <h1>Ipet | Sistema de Vacinação</h1>
        <div>
          <form onSubmit={submit}>
            <img src={ipetImage} alt="Ipet | Sistema de Vacinação de Pet's" />
            <Input handleOnChange={obterDados} tipo="text" texto="Usuario" />
            <Input handleOnChange={obterDados} tipo="password" texto="Senha" />

            <div>
              <Button text="Continuar" />
              <ButtonLink tipo="button" text="Cadastrar" where="./cadastro" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Login;
