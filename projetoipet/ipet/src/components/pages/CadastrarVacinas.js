import InputCaracter from "../form/InputCaracter";
import Button from "../form/Button";
import SelectNomesAnimais from "../form/SelectNomesAnimais";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkTiposVacina, checkCountTiposVacina,checkVacinas,checkNumVacinas } from "../../redux/slice";
import {
  FormFlex,
  DivForm,
  SectionMain,
} from "./stylepages/CadastrarVacinasStyle";
import Confirmation from "../layout/Confirmation";

function CadastrarVacinas() {
  /* redux */
  const stateAtual = useSelector((state) => state.usercheck);
  const dispatch = useDispatch();
  const iduser = stateAtual.iduser;
  const nomeAnimais = stateAtual.animais;
  const tiposVacina = stateAtual.tiposVacina;
  const countTiposVacina = stateAtual.countTiposVacina;
  
  const [ArrayListaVacina,setArrayListaVacina] = useState([])
  
  const [ListaVacina,setListaVacina] = useState([])
  const [NumVacina , setNumVacina] = useState(0)


  /* Confirmação Cadastro */
  const [visible,setVisible] = useState("none")
  const [statusCores, setStatusCores] = useState(false)


  /* state */
  const [DadosVacina, setDadosVacina] = useState({
    datavacinacao: getDate(),
    iduser: iduser,
  });

  const [Vacina, setVacina] = useState([]);
  const [TextoVacina, setTextoVacina] = useState("");
  const [objVacina, setObjVacina] = useState({
    fabricacao: "",
    vencimento: "",
    revacinacao: "",
    obs: "",
  });

  function enviarVacina(e) {
    e.preventDefault();

    fetch("https://ipet-backend.vercel.app/cadastrarvacina", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DadosVacina),
    })
      .then((resp) => resp.json())
      .then((data) => {
        /* console.log(data); */

        ListaVacina.map( element =>{
          ArrayListaVacina.push(element)
        })

        ArrayListaVacina.push(DadosVacina)

        /* console.log(ArrayListaVacina); */

        dispatch(checkVacinas(ArrayListaVacina))
        dispatch(checkNumVacinas((NumVacina+1)))

        setStatusCores(true)
        setVisible("block")

        setTimeout(()=>{
          setVisible("none")
        }, 2500)

      })
      .catch((ex) => console.log(ex));
  }

  function handleDadosVacina(e) {
    setDadosVacina({
      ...DadosVacina,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelectNomeAnimais(e) {
    setDadosVacina({
      ...DadosVacina,
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
    });

    setTextoVacina(e.target.options[e.target.selectedIndex].text);
  }

  useMemo(() => {
    capturarVacina(TextoVacina);
  }, [TextoVacina]);

  function capturarVacina(textoVacina) {
    switch (textoVacina) {
      case "faizer": {
        setObjVacina({
          ...objVacina,
          fabricacao: Vacina[0].fabricacao,
          vencimento: Vacina[0].vencimento,
          revacinacao: Vacina[0].revacinacao,
          obs: Vacina[0].obs,
        });
        setDadosVacina({
          ...DadosVacina,
          fabricacao: Vacina[0].fabricacao,
          vencimento: Vacina[0].vencimento,
          revacinacao: Vacina[0].revacinacao,
          obs: Vacina[0].obs,
        });

        console.log(DadosVacina);

        break;
      }
      case "jonson": {
        setObjVacina({
          ...objVacina,
          fabricacao: Vacina[1].fabricacao,
          vencimento: Vacina[1].vencimento,
          revacinacao: Vacina[1].revacinacao,
          obs: Vacina[1].obs,
        });
        setDadosVacina({
          ...DadosVacina,
          fabricacao: Vacina[1].fabricacao,
          vencimento: Vacina[1].vencimento,
          revacinacao: Vacina[1].revacinacao,
          obs: Vacina[1].obs,
        });

        break;
      }
      case "butatan": {
        setObjVacina({
          ...objVacina,
          fabricacao: Vacina[2].fabricacao,
          vencimento: Vacina[2].vencimento,
          revacinacao: Vacina[2].revacinacao,
          obs: Vacina[2].obs,
        });
        setDadosVacina({
          ...DadosVacina,
          fabricacao: Vacina[2].fabricacao,
          vencimento: Vacina[2].vencimento,
          revacinacao: Vacina[2].revacinacao,
          obs: Vacina[2].obs,
        });

        break;
      }
      default:
        break;
    }
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
   /*  console.log(Object.keys(tiposVacina).length);
    console.log(countTiposVacina);
    console.log(stateAtual) */
    /* console.log(stateAtual)
    console.log(nomeAnimais) */

      setListaVacina(stateAtual.vacinas)
      setNumVacina(stateAtual.countVacinas)
      setVacina(tiposVacina);

    if (Object.keys(tiposVacina).length !== countTiposVacina) {
/* 
      console.log(Object.keys(tiposVacina).length)
      console.log(countTiposVacina) */


      fetch("https://ipet-backend.vercel.app/vacinacao", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          /* console.log(data); */

          dispatch(checkTiposVacina(data));
          dispatch(checkCountTiposVacina(data.length));
          setVacina(data);
        })
        .catch((ex) => console.log(ex));
    }
  }, []);

  return (
    <SectionMain>
      <Confirmation  visible={visible} status={statusCores}/>
      <h1>Cadastre a vacina do seu Animal</h1>
      <div>
        <FormFlex onSubmit={enviarVacina}>
          <DivForm>
            <SelectNomesAnimais
              name="nomeVacina"
              text="Escolha a Vacina"
              handleOnChange={handleSelectNomeAnimais}
              options={Vacina}
            />
            <SelectNomesAnimais
              name="nomeAnimais"
              text="Escolha o nome do seu Animal"
              handleOnChange={handleSelectNomeAnimais}
              options={nomeAnimais}
            />
            <InputCaracter
              textoNome="fabricacao"
              texto="Data de Fabricação"
              tipo="text"
              placeholder="01/01/2019"
              handleOnChange={handleDadosVacina}
              value={objVacina.fabricacao}
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
              value={objVacina.vencimento}
            />
            <InputCaracter
              texto="Data da Aplicação da Vacina"
              textoNome="datavacinacao"
              tipo="text"
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
              value={objVacina.revacinacao}
            />
            <InputCaracter
              textoNome="obs"
              texto="Observação"
              tipo="text"
              handleOnChange={handleDadosVacina}
              value={objVacina.obs}
            />
          </DivForm>

          <Button text="Enviar Cadastro" />
        </FormFlex>
      </div>
    </SectionMain>
  );
}

export default CadastrarVacinas;
