import Button from "../form/Button";
import Input from "../form/Input";
import img_proprietario from "../../img/proprietario.webp"
import {DivFlexProp} from "./stylepages/ProprietarioStyle"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {selectUser} from "../../redux/slice"
import {useNavigate} from 'react-router-dom'
import Confirmation from "../layout/Confirmation";

function Proprietario() {

  const state = useSelector(selectUser)
  const navigate = useNavigate()
  const [proprietario , setProprietario] = useState({})
  const [visible,setVisible] = useState("none")
  const [statusCores, setStatusCores] = useState(false)

  useEffect(()=>{
    const userid =state.iduser
    
    setProprietario({
      ...proprietario,
      ['id_user'] : userid ,
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

    fetch('http://localhost:3005/cadproprietario' , {
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(proprietario)
    })
    .then( res => res.json())
    .then(data => {
      console.log(data)
      setStatusCores(true)
      setVisible("block")

      setTimeout(()=>{
        navigate('/dashboard')
      } , 2500)
    })
    .catch( ex => {
      setStatusCores(false)
      console.log(ex)})

  }

  return (
    <section>
      <Confirmation visible={visible} status={statusCores} />
      
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
