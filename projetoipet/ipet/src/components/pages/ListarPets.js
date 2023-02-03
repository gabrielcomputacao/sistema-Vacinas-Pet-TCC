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
  const [animaisLista, setAnimaisLista] = useState([]);
  const iduser = stateAtual.iduser
  const animaisState = stateAtual.animais || []

  useEffect(() => {

    /* console.log(Object.keys(animaisState).length,animaisState) */
    /* console.log(stateAtual,animaisState) */
    setnumeroPet(animaisState.length);
    setAnimaisLista(animaisState);

    if(stateAtual.editAnimais != stateAtual.editCountAnimais ){
     

      /* console.log("requisição animais") */

      fetch(`https://ipet-backend.vercel.app/getanimais/${iduser}`,{
        method:'GET',
        headers:{
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          //redux
          /* console.log(data.rows) */
          dispatch(checkCountEditAnimais((stateAtual.editAnimais)))
          dispatch(checkHaveAnimais(data))
          /* console.log(data,"teste",data[0],data.rows); */
          setnumeroPet(data.length);
          setAnimaisLista(data);

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
            animaisLista.map((element, index) => (
              
              <Card animal={element} contador={index} key={index} listaAnimais={animaisLista} setListaAnimais={setAnimaisLista}
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
