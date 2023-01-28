import Input from "../form/Input";
import InputCaracter from "../form/InputCaracter";
import Button from "../form/Button";
import Selection from "../form/Select";
import { useState } from "react";
import { DivForm, FormStyle,DivButtonExluir } from "./stylepages/EditAnimalStyle";
import { IoCloseSharp } from "react-icons/io5";

/* redux */
import {useDispatch} from "react-redux"
import {checkEditAnimais} from "../../redux/slice"
import {useSelector} from "react-redux";


function EditAnimal({ editAnimal, setEditVisible,setAtualizarLista }) {

  const dispatch = useDispatch()
  const [editarAnimal, setEditarAnimal] = useState(editAnimal || {});
  const stateAtual = useSelector((state) => state.usercheck)
 

  function capturarEditAnimal(e) {
    setEditarAnimal({
      ...editarAnimal,
      [e.target.name]:  e.target.value,
    });
    console.log(editAnimal)
  }

  function capturaSelectEditAnimal(e) {
    setEditarAnimal({
      ...editarAnimal,
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
    });
  }
  /* console.log(editarAnimal) */

  function handleSubmitEdit(e) {
    e.preventDefault();

    fetch("http://localhost:3005/editanimal", {
      headers: {
        "Content-Type": "application/json",
        
      },
      method: "PATCH",
      body: JSON.stringify(editarAnimal),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch(checkEditAnimais((stateAtual.editAnimais + 1)))
        setAtualizarLista(1)

        setTimeout(() => {
          setEditVisible(false);
          
        }, 1000);
      });
  }

  return (
    <div>
      <DivForm>
        <DivButtonExluir>
          <button
            onClick={() => {
              setEditVisible(false);
              
            }}
          >
            <IoCloseSharp />
          </button>
        </DivButtonExluir>

        <FormStyle onSubmit={handleSubmitEdit}>
          <Input
            texto="Nome"
            tipo="text"
            placeholder={editAnimal.nome ? editAnimal.nome : ""}
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
            handleOnChange={capturarEditAnimal}
            placeholder={
              editAnimal.data_nascimento ? editAnimal.data_nascimento : ""
            }
          />
          <Input
            texto="Sexo"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.sexo ? editAnimal.sexo : ""}
          />
          <Input
            texto="Pelagem"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.pelagem ? editAnimal.pelagem : ""}
          />
          <InputCaracter
            texto="Doença"
            textoNome="doenca"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.doenca ? editAnimal.doenca : ""}
          />
          <InputCaracter
            texto="Alergias"
            textoNome="alergia"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.alergia ? editAnimal.alergia : ""}
          />
          <InputCaracter
            texto="Observações"
            textoNome="obs"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.obs ? editAnimal.obs : ""}
          />
          <Input
            texto="Peso"
            tipo="number"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.peso ? editAnimal.peso : ""}
          />
          <Input
            texto="Tamanho"
            tipo="number"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.tamanho ? editAnimal.tamanho : ""}
          />
          <InputCaracter
            texto="Raça"
            textoNome="raca"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.raca ? editAnimal.raca : ""}
          />
          <InputCaracter
            texto="Espécie"
            textoNome="especie"
            tipo="text"
            handleOnChange={capturarEditAnimal}
            placeholder={editAnimal.especie ? editAnimal.especie : ""}
          />

          <Button text="Editar Cadastro" />
        </FormStyle>
      </DivForm>
    </div>
  );
}

export default EditAnimal;
