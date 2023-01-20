
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {ConfirmationPosition,DesignConfirmation} from "./stylesLayout/ConfirmationStyle"



function Confirmation({status,visible}) {

    const [cores,setCores] = useState(false)
    const [texto,setTexto] = useState("")

   useEffect(()=>{

        if(status){
            setCores(true)
            setTexto("Seu cadastro foi feito com Sucesso!")
        }else{
            setCores(false)
            setTexto("Erro ao realizar Cadastro.")
        }

   }, [status])
       
    
    


    

  return (
  
    <ConfirmationPosition visible = {visible}>
        <DesignConfirmation cores={cores}>
            <p>
                {
                    status &&  texto
                }
                {
                    !status &&  texto
                }
            </p>
        </DesignConfirmation>
    </ConfirmationPosition>
    
  );
}

export default Confirmation;
