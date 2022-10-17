import { FaDog, FaCat, FaPaw,FaHorse} from "react-icons/fa";
import {DivCards,DivCard,DivSvg} from "./stylesLayout/CardStyle"


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
            <p> <span>Nome</span> </p>
            <p> <span>Nome</span> </p>
            <p> <span>Nome</span> </p>
            <p> <span>Nome</span> </p>
            <p> <span>Nome</span> </p>
          </div>
        </div>
      </DivCard>
    </DivCards>
  );
}

export default Card;
