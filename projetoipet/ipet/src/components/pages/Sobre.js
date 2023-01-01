
import {DivFlex,DivContent} from "./stylepages/SobreStyle"
import imagemFamily from "../../img/family_animals.webp"
import ButtonLink from "../form/ButtonLink";
import { useEffect } from "react";

import {useSelector} from "react-redux"
import {selectUser} from "../../redux/slice"


function Sobre() {

  const state = useSelector(selectUser)

  useEffect(()=>{

    /* fetch(`http://localhost:3005/getnomeanimais/${state.iduser}`) */
    console.log(state.iduser)
  }, [])



  return (
    <section>
      <DivFlex>
        <DivContent>
          <h1> Ipet - Sistema de Marcação de Vacina</h1>
          <div>
            <p>
             Nos dias atuais, as pessoas passaram a incluir os animais em seus
            núcleos familiares, considerando-os como membros da família, dado a
            facilidade de estabelecer laços afetivos com seu dono e serem uma
            boa companhia, além de trazer diversos outros benefícios. <br /><br /> Assim, o
            objetivo principal deste estudo é o desenvolvimento de um sistema
            web para facilitar uma melhor verificação e organização das vacinas,
            vermífugos e antiparasitários dos bichinhos através da marcação de
            vacinas.   
            </p>
          </div>
          <ButtonLink text="Cadastrar Proprietário" tipo="button" where="/proprietario"/>
        </DivContent>
        
        <div>
          <img src={imagemFamily} alt="Ipet - Sistema de marcação de vacinas" />
        </div>
      </DivFlex>
    </section>
  );
}

export default Sobre;
