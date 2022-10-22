import Input from "../form/Input";
import Button from "../form/Button";
import { useState } from "react";
import { FormFlex, DivForm, SectionMain } from "./stylepages/CadastrarVacinasStyle";

function CadastrarVacinas() {
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

  const [DadosVacina, setDadosVacina] = useState({});

  return (
    <SectionMain>
      <h1>Cadastre a vacina do seu Animal</h1>
      <div>
        <FormFlex onSubmit={enviarVacina}>
          <DivForm>
            <Input
              texto="Nome do seu Animal"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
            <Input
              texto="Data de Fabricação"
              tipo="text"
              placeholder="01/01/2019"
              handleOnChange={handleDadosVacina}
            />
          </DivForm>

          <DivForm>
            <Input
              texto="Veterinário"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />

            <Input
              texto="Vencimento da Vacina"
              tipo="text"
              placeholder="01/01/2024"
              handleOnChange={handleDadosVacina}
            />
          </DivForm>
          <DivForm>
            <Input
              texto="Data de Hoje"
              tipo="text"
              placeholder="01/01/2001"
              handleOnChange={handleDadosVacina}
            />
            <Input
              texto="Revacinação"
              tipo="text"
              handleOnChange={handleDadosVacina}
            />
          </DivForm>
          <Input
            texto="Observação"
            tipo="text"
            handleOnChange={handleDadosVacina}
          />
          <Button text="Enviar Cadastro" />
        </FormFlex>
      </div>
    </SectionMain>
  );
}

export default CadastrarVacinas;
