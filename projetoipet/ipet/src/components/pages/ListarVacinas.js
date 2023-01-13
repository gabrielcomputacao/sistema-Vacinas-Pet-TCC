import { useEffect, useState } from "react";
import {SectionListaVacna,DivListaVac} from "./stylepages/ListarVacinasStyle"
import CardListaVacina from "../layout/CardListaVacina";

import { useSelector, useDispatch } from "react-redux";
import { selectUser,checkVacinas,checkNumVacinas } from "../../redux/slice";


function ListarVacinas(){
    const state = useSelector(selectUser);
   
    /* use effect para objetos e arrays pega o valor de memoria e nao os valores que
        estão dentro, por isso ao usar de atributo para lista do useeffet ele sempre atualiza
        pois a memoria muda e assim ele atualiza.
    */
    const dispatch = useDispatch();
    const [ListaVacina,setListaVacina] = useState(state.vacinas)
    const [NumVacina , setNumVacina] = useState(state.countVacinas)

    useEffect(()=>{

        console.log(Object.keys(ListaVacina).length)
        console.log(NumVacina)


        if( Object.keys(ListaVacina).length !== NumVacina ){

        fetch(`http://localhost:3005/listavacina/${state.iduser}`,{
            headers:{
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then( resp => resp.json())
        .then( data =>{
            
            setListaVacina(data.rows)

            dispatch(checkVacinas(data.rows))
            dispatch(checkNumVacinas(data.rowCount))
        })
        .catch( ex => console.log(ex))

    }

    } , [])

    return(
        <SectionListaVacna>
            <h2>Sua Lista de Vacinas</h2>
            <DivListaVac>
                {
                    ListaVacina.map((element,index) =>(
                        <CardListaVacina key={index} lista={element} />
                    ))
                }
            </DivListaVac>
        </SectionListaVacna>
        
    )
}

export default ListarVacinas

