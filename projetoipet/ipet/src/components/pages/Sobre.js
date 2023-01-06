import {
  DivFlex,
  DivContent,
  DivHaveAnimal,
  DivNotHaveAnimal,
} from "./stylepages/SobreStyle";
import imagemFamily from "../../img/family_animals.webp";
import ButtonLink from "../form/ButtonLink";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slice";

import { useDispatch } from "react-redux";
import { checkHaveAnimais } from "../../redux/slice";

function Sobre() {
  const [possuiAnimal, setPossuiAnimal] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(selectUser);

  useEffect(() => {
    fetch(`http://localhost:3005/nomeanimais/${state.iduser}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((dados) => {
        setPossuiAnimal(dados.rows);
        dispatch(checkHaveAnimais(dados.rows));
      })
      .catch((ex) => console.log(ex));
  }, []);

  return (
    <section>
      {possuiAnimal.length != null && possuiAnimal.length > 0 ? (
        <DivHaveAnimal>Bem vindo de volta!</DivHaveAnimal>
      ) : (
        <DivNotHaveAnimal>
          {" "}
          Você ainda não possui Pet's Cadastrados.
        </DivNotHaveAnimal>
      )}
      <DivFlex>
        <DivContent>
          <h1> Ipet - Sistema de Marcação de Vacina</h1>
          <div>
            <p>
              Nos dias atuais, as pessoas passaram a incluir os animais em seus
              núcleos familiares, considerando-os como membros da família, dado
              a facilidade de estabelecer laços afetivos com seu dono e serem
              uma boa companhia, além de trazer diversos outros benefícios.{" "}
              <br />
              <br /> Assim, o objetivo principal deste estudo é o
              desenvolvimento de um sistema web para facilitar uma melhor
              verificação e organização das vacinas, vermífugos e
              antiparasitários dos bichinhos através da marcação de vacinas.
            </p>
          </div>
          <ButtonLink
            text="Cadastrar Proprietário"
            tipo="button"
            where="/proprietario"
          />
        </DivContent>

        <div>
          <img src={imagemFamily} alt="Ipet - Sistema de marcação de vacinas" />
        </div>
      </DivFlex>
    </section>
  );
}

export default Sobre;
