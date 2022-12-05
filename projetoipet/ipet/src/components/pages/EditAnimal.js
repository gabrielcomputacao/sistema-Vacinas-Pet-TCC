import Input from "../form/Input";
import InputCaracter from "../form/InputCaracter";
import Button from "../form/Button"
import Selection from "../form/Select";
import { useState } from "react";
import {DivForm,FormStyle} from "./stylepages/EditAnimalStyle"
 


function EditAnimal({editAnimal,setStateEdit}) {

    const [editarAnimal, setEditarAnimal] = useState( editAnimal || {} );

    function capturarEditAnimal(e){
        setEditarAnimal({
            ...editarAnimal,
            [e.target.name] : [e.target.value]
        })
    }
    
    function capturaSelectEditAnimal(e){
        setEditarAnimal({
          ...editarAnimal,
          [e.target.name] : e.target.options[e.target.selectedIndex].text,
        })
      }
      /* console.log(editarAnimal) */

      function handleSubmitEdit(e){
            e.preventDefault()

            fetch( 'http://localhost:3005/editanimal' , {
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'UPDATE',
                body: JSON.stringify(editarAnimal),
            })
            .then( resp => resp.json())
            .then( data =>{
              console.log(data)

              setTimeout(()=>{
                setStateEdit(false)
              }, 1000)
              
            })
      }
      
  return (
    <div>
      <DivForm>
        <FormStyle onSubmit={handleSubmitEdit}>
          <Input
            texto="Nome"
            tipo="text"
            placeholder = {editAnimal.nome ? editAnimal.nome : ""}
            handleOnChange={capturarEditAnimal}
          />
          <Selection
            text="Proprietário"
            name="proprietario"
            handleOnChange={capturaSelectEditAnimal}
            value={editAnimal.proprietario ? editAnimal.proprietario : ""}
          />
          <InputCaracter
            texto="Data Nascimento"
            textoNome="nascimento"
            tipo="text"
            placeholder="01/01/2001"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.data_nascimento ? editAnimal.data_nascimento : ""}
          />
          <Input
            texto="Sexo"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.sexo ? editAnimal.sexo : ""}
          />
          <Input
            texto="Pelagem"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.pelagem ? editAnimal.pelagem : ""}
          />
          <InputCaracter
            texto="Doença"
            textoNome="doenca"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.doenca ? editAnimal.doenca : ""}
          />
          <InputCaracter
            texto="Alergias"
            textoNome="alergia"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.alergia ? editAnimal.alergia : ""}
          />
          <InputCaracter
            texto="Observações"
            textoNome="obs"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.obs ? editAnimal.obs : ""}
          />
          <Input
            texto="Peso"
            tipo="number"
            placeholder="Em Kg"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.peso ? editAnimal.peso : ""}
          />
          <Input
            texto="Tamanho"
            tipo="number"
            placeholder="Em Metros"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.tamanho ? editAnimal.tamanho : ""}
          />
          <InputCaracter
            texto="Raça"
            textoNome="raca"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.raca ? editAnimal.raca : ""}
          />
          <InputCaracter
            texto="Espécie"
            textoNome="especie"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            value={editAnimal.especie ? editAnimal.especie : ""}
          />

          <Button text="Editar Cadastro" />
        </FormStyle>
      </DivForm>
    </div>
  );
}

export default EditAnimal;
