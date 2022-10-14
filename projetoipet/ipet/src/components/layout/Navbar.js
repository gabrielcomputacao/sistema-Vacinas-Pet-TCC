import logo from "../../img/ipet.png";
import { Link } from "react-router-dom";

import {DivNavbar,Imagem,Navegacao} from "./stylesLayout/NavbarStyle"

function Navbar() {
  return (
    <DivNavbar>
      <Link to="/dashboard">
        <Imagem src={logo} alt="Ipet | Sistema de Marcação de Vacina" />
      </Link>

      <Navegacao>
        <ul>
          <li>
            <Link to="/listar">Meus Pet's</Link>
          </li>
          <li> <Link to="/cadastrar-vacina">Cadastrar Vacina</Link> </li>
          <li> <Link to="/listar-vacina">Listar Vacinas</Link> </li>
        </ul>
      </Navegacao>
    </DivNavbar>
  );
}

export default Navbar;
