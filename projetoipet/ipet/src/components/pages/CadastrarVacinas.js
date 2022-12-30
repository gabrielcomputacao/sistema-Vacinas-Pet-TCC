import InputCaracter from "../form/InputCaracter";
import Button from "../form/Button";
import { useEffect, useState } from "react";
import {
  FormFlex,
  DivForm,
  SectionMain,
} from "./stylepages/CadastrarVacinasStyle";

function CadastrarVacinas() {
  const [DadosVacina, setDadosVacina] = useState({});

  function enviarVacina(e) {
    e.preventDefault();
    console.log(DadosVacina);
  }

  function handleDadosVacina(e) {
    setDadosVacina({
      ...DadosVacina,
      [e.target.name]: [e.target.value],
    });
  }

  function getDate() {
    let montandoData = "";
    const date = new Date();

    montandoData += date.getDate() + "/";

    const mounth = date.getMonth() + 1;

    montandoData += mounth + "/";

    const year = date.getFullYear();

    montandoData += year;

    return montandoData;
  }

  useEffect(() => {
    fetch("http://localhost:3005/vacinacao", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.rows);
      })
      .catch((ex) => console.log(ex));
  }, []);

  return (
    <SectionMain>
      <h1>Cadastre a vacina do seu Animal</h1>
      <div>
        <FormFlex onSubmit={enviarVacina}>
          <DivForm>
            <InputCaracter
              textoNome="nomeVacina"
              texto="Nome da Vacina"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
            <InputCaracter
              textoNome="nomeAnimal"
              texto="Nome do seu Animal"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
            <InputCaracter
              textoNome="fabricacao"
              texto="Data de Fabricação"
              tipo="text"
              placeholder="01/01/2019"
              handleOnChange={handleDadosVacina}
            />
          </DivForm>

          <DivForm>
            <InputCaracter
              textoNome="veterinario"
              texto="Veterinário"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />

            <InputCaracter
              textoNome="vencimento"
              texto="Vencimento da Vacina"
              tipo="text"
              placeholder="01/01/2024"
              handleOnChange={handleDadosVacina}
            />
            <InputCaracter
              texto="Data da Aplicação da Vacina"
              textoNome="datavacinacao"
              tipo="text"
              placeholder="01/01/2001"
              handleOnChange={handleDadosVacina}
              defaultValue={getDate()}
            />
          </DivForm>
          <DivForm>
            <InputCaracter
              textoNome="revacinacao"
              texto="Revacinação"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
            <InputCaracter
              textoNome="obs"
              texto="Observação"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
          </DivForm>

          <Button text="Enviar Cadastro" />
        </FormFlex>
      </div>
    </SectionMain>
  );
}

export default CadastrarVacinas;
