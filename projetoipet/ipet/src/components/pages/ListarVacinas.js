import { useEffect, useState } from "react";
import {SectionListaVacna,DivListaVac} from "./stylepages/ListarVacinasStyle"

function ListarVacinas(){

    const [ListaVacina,setListaVacina] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3005/listavacina",{
            headers:{
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then( resp => resp.json())
        .then( data =>{
            console.log(data)
            setListaVacina(data.rows)
        })
        .catch( ex => console.log(ex))
    } , [])

    return(
        <SectionListaVacna>
            <h2>Listar Vacinas</h2>
            <DivListaVac>
                <div>

                </div>
            </DivListaVac>
        </SectionListaVacna>
        
    )
}

export default ListarVacinas

