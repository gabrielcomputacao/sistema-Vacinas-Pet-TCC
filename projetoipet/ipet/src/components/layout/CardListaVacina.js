
import {CardDivLista,HeaderCardLista,BodyCardLista} from "./stylesLayout/CardListaSryle"

 function CardListaVacina(props){

    return(
        <CardDivLista>
            <HeaderCardLista>
                <h3>Vacina: {props.lista.nomevacina}</h3>
                <h4>Animal: {props.lista.nomeanimal}</h4>
            </HeaderCardLista>
            <BodyCardLista>
                <p>Data da Vacinação : {props.lista.datavacinacao}</p>
                <p>Fabricação : {props.lista.fabricacao}</p>
                <p>Vencimento : {props.lista.vencimento}</p>
                <p>Revanição : {props.lista.revacinacao}</p>
            </BodyCardLista>
        </CardDivLista>
    )

 }


 export default CardListaVacina



