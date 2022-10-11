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
            <Link>Meus Pet's</Link>
          </li>
          <li> <Link>Cadastrar Vacina</Link> </li>
          <li> <Link>Listar Vacinas</Link> </li>
        </ul>
      </Navegacao>
    </DivNavbar>
  );
}

export default Navbar;
