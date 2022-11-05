
import {useEffect, useState} from "react"

import {SpanMessage} from "./stylesLayout/MessageStyle"

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

        } , 2000)

        return ()=>{
            clearTimeout(timer)
        }

    }, [msg])


    return(
        <>
            {
                visible && <SpanMessage>{msg}</SpanMessage>
            }
        </>
        
    )

}

export default Message;
