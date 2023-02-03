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
import { checkNumAnimais, selectUser } from "../../redux/slice";

import { useDispatch } from "react-redux";
import { checkHaveAnimais,checkCountAnimais } from "../../redux/slice";


function Sobre() {
  const state = useSelector(selectUser);

  const [possuiAnimal, setPossuiAnimal] = useState([]);
  const [ContAnimais, setContAnimais] = useState(state.countAnimais);
  const [NumeroAnimais, setNumeroAnimais] = useState(state.numAnimais);
  const dispatch = useDispatch();

  useEffect(() => {
    /* console.log(state) */
    /* console.log(NumeroAnimais , ContAnimais , "TESTE") */

    if (ContAnimais !== NumeroAnimais) {
      fetch(`https://ipet-backend.vercel.app/nomeanimais/${state.iduser}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((dados) => {
          /* console.log(dados,dados.length,dados[0]); */


          /* console.log(NumeroAnimais); */
          
          
          setPossuiAnimal(dados);

          setNumeroAnimais(dados.length)

          dispatch(checkHaveAnimais(dados));
          dispatch(checkNumAnimais(dados.length));
          dispatch(checkCountAnimais(dados.length));
        })
        .catch((ex) => console.log(ex));
    }
  }, [NumeroAnimais]);

  return (
    <section>
      {NumeroAnimais != null && NumeroAnimais > 0 ? (
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
              verificação e organização a princípio das vacinas, futuramente também irá abrangir vermífugos e
              antiparasitários dos bichinhos através da marcação no Ipet.
              <br />
              <br />
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
