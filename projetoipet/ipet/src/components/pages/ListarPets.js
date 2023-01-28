import { useEffect, useMemo, useState } from "react";
import ButtonLink from "../form/ButtonLink";
import Card from "../layout/Card";
import {DivAnimais} from "./stylepages/ListarPetsStyle"
import {useSelector} from "react-redux";
/* redux */
import {useDispatch} from "react-redux"
import {checkCountEditAnimais, checkHaveAnimais} from "../../redux/slice"

function ListarPets() {

  const dispatch = useDispatch()

  const [numeroPet, setnumeroPet] = useState(0);
  const [atualizarLista, setAtualizarLista] = useState(0);
  const stateAtual = useSelector((state) => state.usercheck)
  const [animais, setAnimais] = useState({});
  const iduser = stateAtual.iduser
  const animaisState = stateAtual.animais

  useEffect(() => {

    /* console.log(Object.keys(animaisState).length,animaisState) */

    setnumeroPet(Object.keys(animaisState).length);
    setAnimais(animaisState);

    if(stateAtual.editAnimais != stateAtual.editCountAnimais ){
     

      console.log("requisição animais")

      fetch(`http://localhost:3005/getanimais/${iduser}`,{
        method:'GET',
        headers:{
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          //redux
          dispatch(checkCountEditAnimais((stateAtual.editAnimais)))
          dispatch(checkHaveAnimais(data.rows))
          console.log(data.rows);
          setnumeroPet(data.rowCount);
          setAnimais(data.rows);

        })
        .catch((ex) => console.log(ex));
    }
  }, [atualizarLista]);

  return (
    <section>
      {numeroPet > 0 ? (
        <div>
          <p>Cadastre mais Pets</p>
        </div>
      ) : (
        <div>
          <p>Você ainda não tem Pets Cadastrados</p>
        </div>
      )}
      <ButtonLink
        text="Cadastrar Pet"
        tipo="button"
        where="/animais-cadastro"
      ></ButtonLink>

      <div>
        <h1>Seus Animais</h1>
        <DivAnimais>
          {numeroPet > 0 &&
            animais.map((element, index) => (
              
              <Card animal={element} contador={index} key={index} listaAnimais={animais} setListaAnimais={setAnimais}
                setAtualizarLista= {setAtualizarLista}
              />
              
            ))}

          {numeroPet == 0 && <h3>Não existe animais Cadastrados Ainda</h3>}
        </DivAnimais>
      </div>
    </section>
  );
}

export default ListarPets;
