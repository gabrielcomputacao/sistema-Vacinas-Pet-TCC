import { FaDog, FaCat, FaPaw,FaHorse} from "react-icons/fa";
import {DivCards,DivCard,DivSvg,Pitens} from "./stylesLayout/CardStyle"


function Card() {
  return (
    <DivCards>
      <DivCard>
        <DivSvg>
          <FaCat />
          <FaDog />
          <FaPaw />
          <FaHorse />
        </DivSvg>
        <div>
          <div>
            <Pitens> <span>Nome</span> </Pitens>
            <Pitens> <span>Peso</span> </Pitens>
            <Pitens> <span>Idade</span> </Pitens>
            <Pitens> <span>Raça</span> </Pitens>
            <Pitens> <span>Tipo</span> </Pitens>
          </div>
        </div>
      </DivCard>
    </DivCards>
  );
}

export default Card;
