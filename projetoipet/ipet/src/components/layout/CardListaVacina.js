

 function CardListaVacina(props){

    return(
        <div>
            <div>
                <h3>{props.lista.nomevacina}</h3>
                <h4>{props.lista.nomeanimal}</h4>
            </div>
            <div>
                <p>{props.lista.fabricacao}</p>
                <p>Vencimento : {props.lista.vencimento}</p>
                <p>Data da Vacinação : {props.lista.datavacinacao}</p>
                <p>Revanição : {props.lista.revacinacao}</p>
            </div>
        </div>
    )

 }


 export default CardListaVacina



