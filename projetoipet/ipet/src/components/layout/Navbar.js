import logo from "../../img/ipet.png";
import { Link } from "react-router-dom";

import {
  DivNavbar,
  Imagem,
  Navegacao,
  ButtonHamburguer,
  MobileButtons,
  NavegacaoMobile,
  Separador
} from "./stylesLayout/NavbarStyle";
import IconUser from "./IconUser";
import { useState } from "react";

function Navbar() {

  const [visible,setVisible] = useState("none")

  function setVisivel(){

    if(visible == "none"){
        setVisible("block")
    }else{
      setVisible("none")
    }


  }


  return (
    <div>
      <DivNavbar>
        <Link to="/dashboard">
          <Imagem src={logo} alt="Ipet | Sistema de Marcação de Vacina" />
        </Link>

        <Navegacao>
          <ul>
            <li>
              <Link to="/listar">Meus Pet's</Link>
            </li>
            <li>
              {" "}
              <Link to="/cadastrar-vacina">Cadastrar Vacina</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/listar-vacina">Listar Vacinas</Link>{" "}
            </li>
          </ul>
        </Navegacao>
        <MobileButtons>
          <IconUser />
          <ButtonHamburguer onClick={setVisivel}>
            <label htmlFor="">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </ButtonHamburguer>
        </MobileButtons>
      </DivNavbar>
      <NavegacaoMobile visible={visible}>
        <ul>
          <li>
            <Link to="/listar">Meus Pet's</Link>
          </li>
          <Separador></Separador>
          <li>
            <Link to="/cadastrar-vacina">Cadastrar Vacina</Link>
          </li>
          <Separador></Separador>
          <li>
            <Link to="/listar-vacina">Listar Vacinas</Link>
          </li>
        </ul>
      </NavegacaoMobile>
    </div>
  );
}

export default Navbar;
