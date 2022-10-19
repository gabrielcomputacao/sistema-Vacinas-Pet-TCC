import Input from "../form/Input"
import Button from "../form/Button"
import { useState } from "react"


function CadastrarVacinas(){

    function enviarVacina(e){
        e.preventDefault()
        console.log(DadosVacina)
    }

    function handleDadosVacina(e){
        setDadosVacina({
            ...DadosVacina,
            [e.target.name] : [e.target.value]
        })
    }

    const [DadosVacina,setDadosVacina] = useState({})

    return(
        <section>
            <h1>Cadastre a vacina do seu Animal</h1>
            <div>
                 <form onSubmit={enviarVacina}>
                    <Input texto="Nome do seu Animal" tipo="text" handleOnChange={handleDadosVacina}/>
                    <Input texto="Data de Fabricação" tipo="text" placeholder="01/01/2019" handleOnChange={handleDadosVacina}/>
                    <Input texto="Veterinário" tipo="text" handleOnChange={handleDadosVacina}/>
                    <Input texto="Vencimento da Vacina" tipo="text" placeholder="01/01/2024" handleOnChange={handleDadosVacina}/>
                    <Input texto="Data de Hoje" tipo="text" placeholder="01/01/2001" handleOnChange={handleDadosVacina}/>
                    <Input texto="Revacinação" tipo="text" handleOnChange={handleDadosVacina}/>
                    <Input texto="Observação" tipo="text" handleOnChange={handleDadosVacina}/>
                    <Button text="Enviar Cadastro"/>
            </form>
            </div>
           
        </section>
    )
}

export default CadastrarVacinas