import Button from "../form/Button";
import Input from "../form/Input";

function Proprietario() {
  return (
    <section>
      <h1> Proprietário</h1>
      <div>
        <div>
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
        </div>
        <img src="" alt="Dono de Animais" title="Dono de Animais" />
      </div>
      <Button text="Enviar" />
    </section>
  );
}

export default Proprietario;
