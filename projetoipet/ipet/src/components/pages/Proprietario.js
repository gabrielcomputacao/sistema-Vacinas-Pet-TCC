import Button from "../form/Button";
import Input from "../form/Input";
import img_proprietario from "../../img/proprietario.webp"
import {DivFlexProp} from "./stylepages/ProprietarioStyle"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {selectUser} from "../../redux/slice"


function Proprietario() {

  const state = useSelector(selectUser)

  const [proprietario , setProprietario] = useState({})


  useEffect(()=>{
    const userid =state.iduser
    const idUser ={
      idusuario : userid,
    } 
    console.log(userid)

    fetch("http://localhost:3005/idendereco",{
      method: "post",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(idUser)
    })
    .then( res => res.json())
    .then(dados =>{
      /* console.log(dados.rows[0].id_endereco) */

      setProprietario({
        ...proprietario,
        ["cod_endereco"] : dados.rows[0].id_endereco,
      })

      
    })
  }, [])

  /* console.log(proprietario) */

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
