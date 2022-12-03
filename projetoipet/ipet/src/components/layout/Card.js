import { useState } from "react";
import { FaDog, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
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

  function deletar() {
    setStateDelet(true);
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
      <DivCard>
        <DivBut>
          <ButtonStyled type="button">
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
              
              <span>Idade: {animal.data_nascimento}</span>
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
