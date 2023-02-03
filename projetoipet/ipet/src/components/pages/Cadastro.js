import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from "../form/Button";
import Input from "../form/Input";
import {Section,SelectionCadastro} from "./stylepages/CadastroStyle"
import gato from "../../img/ipet.png"
import fundo from "../../img/fundocat.webp"
import Message from "../layout/Message"

/* redux */
import {useSelector} from "react-redux"
import InputCaracter from "../form/InputCaracter";



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
      /* console.log(endereco) */

      fetch('https://ipet-backend.vercel.app/idendereco' , {
        method:'post',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(endereco)
      })
      .then( res => res.json())
      .then( data =>{
       /*  console.log(data[0].id_endereco) */
        setDadosCadastro({
          ...dadosCadastro,
          ['idendereco'] : data[0].id_endereco,
        })
      })
      .catch( ex => console.log(ex))
    } , [])

    /* console.log(dadosCadastro) */

    function submitCadastro(e){
        e.preventDefault()
        /* console.log(dadosCadastro) */
        fetch('https://ipet-backend.vercel.app/cadastrousuario',{
          method:'post',
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dadosCadastro)
        }).then( res => res.json())
        .then( text => {
          /* console.log(text) */
          setMessage('Cadastrado com Sucesso!')
          setTimeout(()=>{
            
            navigate("/")
          } , 2000)
        })
        .catch( error => console.log(error))


    }

    function cadastrarDados(e){
        setDadosCadastro({...dadosCadastro,
            [e.target.name] : e.target.value})
    }

    function cadastrarDadosSection(e){
        setDadosCadastro({...dadosCadastro,
          [e.target.name] : e.target.options[e.target.selectedIndex].text,
        
        })
    }

   

  return (
    <Section background={fundo}>
      {message && <Message msg={message}></Message>}
      <div>
        <img src={gato} alt="Ipet | Cadastro" />
        <h3>Gerenciamento de Vacinas para Animais</h3>
        <h1>Cadastrar Usuário</h1>
        <form onSubmit={submitCadastro}>
          <InputCaracter handleOnChange={cadastrarDados} tipo="text" texto="Usuário" textoNome="nome" />
         <Input handleOnChange={cadastrarDados} tipo="email" texto="Email" />
          <Input handleOnChange={cadastrarDados} tipo="password" texto="Senha" />
          {/* <Input handleOnChange={cadastrarDados} tipo="text" texto="Tipo" /> */}
          <SelectionCadastro onChange={cadastrarDadosSection} name="tipo" id="tipo">
            <option  value="1" selected disabled={true}>Selecione...</option>
            <option value="pessoa">Pessoa Física</option>
            <option value="empresa">Empresa</option>
          </SelectionCadastro>


          <Button text="Cadastrar" />
        </form>
      </div>
    </Section>
  );
}

export default Cadastro;
