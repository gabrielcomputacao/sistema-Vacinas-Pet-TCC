import { useState } from "react";
import ButtonLink from "../form/ButtonLink";
import Card from "../layout/Card";

function ListarPets() {
  const [numeroPet, setnumeroPet] = useState(1);

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
        where="./animais-cadastro"
      ></ButtonLink>

      <div>
        <h1>Seus Animais Animais</h1>
        {numeroPet > 0 && <Card />}
      </div>
    </section>
  );
}

export default ListarPets;
