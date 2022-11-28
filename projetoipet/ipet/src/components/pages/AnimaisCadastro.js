import Input from "../form/Input";
import InputCaracter from "../form/InputCaracter";
import Button from "../form/Button"
import {FlexForm} from "./stylepages/AnimaisStyle"
import { useEffect, useState } from "react";
import Selection from "../form/Select";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

function AnimaisCadastro() {

    const stateUser = useSelector( state =>  state.usercheck)
    const [animaisDados,setAnimaisDados] = useState({})
    const iduser = stateUser.iduser;
    const [nomes,setNomes] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{

      console.log(iduser)
      const coduser = 'coduser'
      setAnimaisDados({ ...animaisDados,
        [coduser] : iduser
      })

      fetch(`http://localhost:3005/getpropnomes/${iduser}`, {
        method: 'GET',
        headers:{
          "Content-Type": "application/json",
        },
      })
      .then( (res) => res.json())
      .then( (data) => {
          setNomes(data.rows)
          console.log(data.rows)
          /* console.log(nomes) */
      })
      .catch( ex => console.log(ex))

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    function capturarDadosAnimal(e){
        setAnimaisDados( {...animaisDados,
            [e.target.name] : e.target.value})
            console.log(animaisDados)
    }

    function capturaSelectAnimal(e){
      setAnimaisDados({
        ...animaisDados,
        [e.target.name] : e.target.options[e.target.selectedIndex].text,
      })
    }

    function submitDadosAnimal(e){
        e.preventDefault()

        

        console.log(animaisDados)

        fetch( 'http://localhost:3005/cadastroanimais' , {
          method: 'post',
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animaisDados)
        })
        .then( res => res.json())
        .then(data =>{
          console.log(data)

          setTimeout( ()=>{
            navigate("/listar")
          },1500)
        })
        .catch( ex => console.log(ex))
        
        console.log(animaisDados)
    }

  return (
    <section>
      <h1>Cadastre seu Animal no Ipet</h1>
      <div>
        <form onSubmit={submitDadosAnimal}>
          <FlexForm>
            <Input texto="Nome" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Selection text="Proprietário" options={nomes} name='proprietario' handleOnChange={capturaSelectAnimal}/>
            <InputCaracter texto="Data Nascimento" textoNome="nascimento"  tipo="text" placeholder="01/01/2001"handleOnChange={capturarDadosAnimal}/>
            <Input texto="Sexo" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Pelagem" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <InputCaracter texto="Doença" textoNome="doenca" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <InputCaracter texto="Alergias" textoNome="alergia" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <InputCaracter texto="Observações" textoNome="obs" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Peso" tipo="number" placeholder="Em Kg" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Tamanho" tipo="number" placeholder="Em Metros" handleOnChange={capturarDadosAnimal}/>
            <InputCaracter texto="Raça" textoNome="raca" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <InputCaracter texto="Espécie" textoNome="especie" tipo="text" handleOnChange={capturarDadosAnimal}/>
          </FlexForm>
          <Button text="Enviar Cadastro"/>
        </form>
      </div>
    </section>
  );
}

export default AnimaisCadastro;
