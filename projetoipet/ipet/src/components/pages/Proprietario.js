import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";

function Proprietario() {

    function proprietarioSubmit(e){
        e.preventDefault()
        console.log(dadosEndereco)
        console.log(dadosProprietario)
    }

    const [dadosProprietario, setDadosProprietario] = useState({})
    const [dadosEndereco , setDadosEndereco] = useState({})

  return (
    <section>
      <div>
        <form onSubmit={proprietarioSubmit}>
          <h1> Proprietário</h1>
          <Input
            texto="Nome"
            tipo="text"
            placeholder="Digite seu nome"
            handleOnChange="teste"
          />

          <Input
            texto="CPF"
            tipo="text"
            placeholder="333.333.333-28"
            handleOnChange="text"
          />

          <Input
            texto="Telefone"
            tipo="text"
            placeholder="(33) 933333333"
            handleOnChange="text"
          />

          <Input
            texto="Obs"
            tipo="text"
            placeholder="Observações"
            handleOnChange="text"
          />

          <hr />
          <h2>Endereço</h2>

          <Input texto="Rua" tipo="text" handleOnChange="text" />
          <Input
            texto="CEP"
            tipo="text"
            handleOnChange="text"
            placeholder="35.400-22"
          />
          <Input texto="Bairro" tipo="text" handleOnChange="text" />
          <Input texto="Número" tipo="number" handleOnChange="text" />
          <Input texto="Cidade" tipo="text" handleOnChange="text" />
          <Input texto="Estado" tipo="text" handleOnChange="text" />
          <Input
            texto="Referencia"
            tipo="text"
            handleOnChange="text"
            placeholder="Referência"
          />

          <Button text="Cadastrar" />
        </form>
      </div>
    </section>
  );
}

export default Proprietario;
