import logo from "../../img/ipet.png";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  DivFooter,
  Imagem,
  DivTexto,
  DivContatos,
  Copy,
} from "./stylesLayout/FooterStyle";

function Footer() {
  return (
    <>
      <DivFooter>
        <div>
          <Imagem src={logo} alt="Ipet | Contatos" />
        </div>
        <DivTexto>
          <h4>Gabriel Henrique</h4>
          <p>
            Cursando engenharia da computação, dedicado e aberto para novos
            conhecimentos e experiências. Busco por crescimento no campo da
            programação, estou buscando me especializar na parte de front end
          </p>
        </DivTexto>
        <DivContatos>
          <h4>Contatos</h4>
          <ul>
            <li>
              <a
                href="https://github.com/gabrielcomputacao"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/" rel="noopener noreferrer"
                target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-henrique-931163181/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </DivContatos>
      </DivFooter>
      <Copy>
        <span> Copy</span> &copy; 2022 Por Gabriel Henrique. Todos os Direitos
        Reservados.
      </Copy>
    </>
  );
}

export default Footer;
