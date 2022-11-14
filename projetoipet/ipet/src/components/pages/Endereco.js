import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import { DivCampos,DivImgContent } from "./stylepages/EnderecoStyle";

import familiaAnimal from "../../img/family_animals2.webp";
import { useSelector } from "react-redux";
import {selectUser} from "../../redux/slice"


function Endereco() {

  const [dadosEndereco, setDadosEndereco] = useState({});
  const state = useSelector(selectUser)

  function enderecoSubmit(e) {
    e.preventDefault();
    
    setDadosEndereco({
      ...dadosEndereco,
      ["idusuario"] : state.iduser,
    })

    fetch("http://localhost:3005/endereco" , {
      method:"post",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosEndereco)
    })
    .then( res => res.json())
    .then( data => console.log(data))

    
  }

  function handleEndereco(e){
    setDadosEndereco({
      ...dadosEndereco,
        [e.target.name] : e.target.value
    })
  }

 

  return (
    <section>
      <div>
        <form onSubmit={enderecoSubmit}>
          <h2>Endereço</h2>
          <DivImgContent>

          
          <DivCampos>
            <div>

            
            <Input texto="Rua" tipo="text" handleOnChange={handleEndereco} />
            <Input
              texto="CEP"
              tipo="text"
              handleOnChange={handleEndereco}
              placeholder="35.400-22"
            />
            <Input texto="Bairro" tipo="text" handleOnChange={handleEndereco} />
            <Input texto="Numero" tipo="number" handleOnChange={handleEndereco} />
            </div>
            <div>

           
            <Input texto="Cidade" tipo="text" handleOnChange={handleEndereco} />
            <Input texto="Estado" tipo="text" handleOnChange={handleEndereco} />
            <Input
              texto="Referencia"
              tipo="text"
              handleOnChange={handleEndereco}
              placeholder="Referência"
            />
             </div>
          </DivCampos>
          <img src={familiaAnimal} alt="Família com Cachorro" />
          </DivImgContent>
          <Button text="Próximo" />
        </form>
      </div>
    </section>
  );
}

export default Endereco;