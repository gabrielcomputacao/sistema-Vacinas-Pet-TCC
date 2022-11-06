
import {useEffect, useState} from "react"

import {Danger, Sucess} from "./stylesLayout/MessageStyle"

function Message({tipo, msg}){

    const [visible, setVisible] = useState(false)

    useEffect(()=>{

        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        let timer = setTimeout( ()=>{
            
            setVisible(false)

        } , 1500)

        return ()=>{
            clearTimeout(timer)
        }

    }, [msg])


    return(
        <>
            {
                visible && tipo == "sucesso" && <Sucess>{msg}</Sucess>
            }
            {
                visible && tipo == "danger" && <Danger>{msg}</Danger>
            }
        </>
        
    )

}

export default Message;
