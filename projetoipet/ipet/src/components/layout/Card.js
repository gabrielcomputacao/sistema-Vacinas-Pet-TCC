import { useState } from "react";
import { FaDog, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import EditAnimal from "../pages/EditAnimal";
import Confirmar from "./Confirmar";
import {
  DivCards,
  DivCard,
  DivSvg,
  Pitens,
  ButtonStyled,
  DivBut,
} from "./stylesLayout/CardStyle";

function Card({ animal,listaAnimais,setListaAnimais }) {
const [stateDelet, setStateDelet] = useState(false);
const [stateEdit,setStateEdit] = useState(false);

  function deletar() {
    setStateDelet(true);
  }

  function edit(){
    setStateEdit(true);
  }

  return (
    <DivCards>
      {stateDelet && (
        <Confirmar
          idanimais={animal.id_animal}
          setStateVisible={setStateDelet}
          nome={animal.nome}
          listaA = {listaAnimais}
          setAnimais = {setListaAnimais}
        />
      )}
      {
        stateEdit && (
          <EditAnimal 
            editAnimal={animal}
            setEditVisible={setStateEdit}
          />
        )

      }
      <DivCard>
        <DivBut>
          <ButtonStyled type="button" onClick={edit}>
            <FaPencilAlt /> Editar
          </ButtonStyled>
          <ButtonStyled type="button" onClick={deletar}>
            <FaTrashAlt /> Deletar
          </ButtonStyled>
        </DivBut>
        <DivSvg>
          <FaDog />
        </DivSvg>
        <div>
          <div>
            <Pitens>
              
              <span>Nome: {animal.nome}</span>
            </Pitens>
            <hr />
            <Pitens>
              
              <span>Peso: {animal.peso}</span>
            </Pitens>
            <hr />
            <Pitens>
              
              <span>Data de Nascimento: {animal.nascimento}</span>
            </Pitens>
            <hr />
            <Pitens>
              
              <span>Raça: {animal.raca}</span>
            </Pitens>
            <hr />
            <Pitens>
              
              <span>Espécie: {animal.especie}</span>
            </Pitens>
            <hr />
          </div>
        </div>
      </DivCard>
    </DivCards>
  );
}

export default Card;
