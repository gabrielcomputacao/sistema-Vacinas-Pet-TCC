import { useEffect, useState } from "react";
import ButtonLink from "../form/ButtonLink";
import Card from "../layout/Card";
import {DivAnimais} from "./stylepages/ListarPetsStyle"

function ListarPets() {
  const [numeroPet, setnumeroPet] = useState(0);
  const [animais, getAnimais] = useState({});

  useEffect(() => {
    fetch("http://localhost:3005/getanimais")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.rows);
        setnumeroPet(data.rowCount);
        getAnimais(data.rows);
      })
      .catch((ex) => console.log(ex));
  }, [animais]);

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
              
              <Card animal={element} contador={index} key={index} />
              
            ))}

          {numeroPet < 0 && <h3>Não existe animais Cadastrados Ainda</h3>}
        </DivAnimais>
      </div>
    </section>
  );
}

export default ListarPets;
