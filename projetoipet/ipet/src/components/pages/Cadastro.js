import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from "../form/Button";
import Input from "../form/Input";
import {Section} from "./stylepages/CadastroStyle"
import gato from "../../img/gato.jpg"
import fundo from "../../img/fundo_animais2.jpg"
import Message from "../layout/Message"

/* redux */
import {useSelector} from "react-redux"



function Cadastro() {

    const navigate = useNavigate()
    const [message , setMessage] = useState()
    const [dadosCadastro,setDadosCadastro] = useState({})
    const state = useSelector((state)=> state.usercheck)
    const endereco = {
      rua: state.endereco.rua,
      numero: state.endereco.numero,
      cep: state.endereco.cep,
    }


    useEffect(()=>{
      console.log(endereco)

      fetch('http://localhost:3005/idendereco' , {
        method:'post',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(endereco)
      })
      .then( res => res.json())
      .then( data =>{
        console.log(data.rows[0].id_endereco)
        setDadosCadastro({
          ...dadosCadastro,
          ['idendereco'] : data.rows[0].id_endereco,
        })
      })
      .catch( ex => console.log(ex))
    } , [])

    console.log(dadosCadastro)

    function submitCadastro(e){
        e.preventDefault()
        console.log(dadosCadastro)
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
          setTimeout(()=>{
            
            navigate("/")
          } , 4000)
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
        <h1>Cadastrar Usuário</h1>
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
