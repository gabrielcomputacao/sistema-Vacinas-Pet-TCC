import {  useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import {
  DivCampos,
  DivImgContent,
  DivEndereco,
  SecEnd,
} from "./stylepages/EnderecoStyle";
import fundo from "../../img/fundo_animais2.jpg";
import familiaAnimal from "../../img/family_animals2.webp";
import { useNavigate } from "react-router-dom";

function Endereco() {
  const navigate = useNavigate();
  const [dadosEndereco, setDadosEndereco] = useState({});

  function enderecoSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3005/endereco", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosEndereco),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          navigate("/cadastro");
        }, 1500);
      })
      .catch(ex => console.log(ex));
  }

  function handleEndereco(e) {
    setDadosEndereco({
      ...dadosEndereco,
      [e.target.name]: e.target.value,
    });

    console.log(dadosEndereco);
  }

  return (
    <SecEnd back={fundo}>
      <DivEndereco>
        <form onSubmit={enderecoSubmit}>
          <h2>Cadastre o Endereço</h2>
          <DivImgContent>
            <DivCampos>
              <div>
                <Input
                  texto="Rua"
                  tipo="text"
                  handleOnChange={handleEndereco}
                />
                <Input
                  texto="CEP"
                  tipo="text"
                  handleOnChange={handleEndereco}
                  placeholder="35.400-22"
                />
                <Input
                  texto="Bairro"
                  tipo="text"
                  handleOnChange={handleEndereco}
                />
                <Input
                  texto="Numero"
                  tipo="number"
                  handleOnChange={handleEndereco}
                />
              </div>
              <div>
                <Input
                  texto="Cidade"
                  tipo="text"
                  handleOnChange={handleEndereco}
                />
                <Input
                  texto="Estado"
                  tipo="text"
                  handleOnChange={handleEndereco}
                />
                <Input
                  texto="Referencia"
                  tipo="text"
                  handleOnChange={handleEndereco}
                  placeholder="Referência"
                />
              </div>
            </DivCampos>
            <img src={familiaAnimal} alt="Família com Cachorro" />
          </DivImgContent>
          <Button text="Próximo" />
        </form>
      </DivEndereco>
    </SecEnd>
  );
}

export default Endereco;
