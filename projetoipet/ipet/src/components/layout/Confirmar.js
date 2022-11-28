
import {DivConfirm} from "./stylesLayout/ConfirmarStyle"

function Confirmar({idanimais, setStateVisible, nome}){

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