
import {DivConfirm} from "./stylesLayout/ConfirmarStyle"
import {useDispatch} from "react-redux"
import {checkHaveAnimais} from "../../redux/slice"


function Confirmar({idanimais, setStateVisible, nome,listaA,setAnimais}){

    const dispatch = useDispatch()

    function deletarAnimal(idanimal){
        fetch(`http://localhost:3005/deletanimal/${idanimal}` , {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then((res) => res.json())
        .then( (data) =>{
            console.log(data)
            console.log(listaA)
            const newLista = listaA.filter( (animal)=>{
                return animal.id_animal != idanimais
            })
            setAnimais( newLista)
            dispatch(checkHaveAnimais(newLista))
        })
        .catch( ex => console.log(ex))
    }

    return(
        <DivConfirm>
            <h3>Deseja confirmar exclusão do Animal: {nome}?</h3>
            <button type="button" onClick={()=>{
                console.log(idanimais)

                deletarAnimal(idanimais)
                setTimeout(()=>{
                    setStateVisible(false)
                }, 1500)
                
            }}>Sim</button>
            <button type="button" onClick={()=>{
                setStateVisible(false)
            }}>Não</button>
        </DivConfirm>
    )

}

export default Confirmar