import logo from "../../img/ipet.png";
import {Link} from "react-router-dom"
import {FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
import {DivFooter, Imagem,DivTexto, DivContatos} from "./stylesLayout/FooterStyle"

function Footer() {
  return (
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
            <li><Link>{FaGithub}</Link></li>
            <li><Link>{FaInstagram}</Link></li>
            <li>
                <Link>{FaLinkedin}</Link>
            </li>
        </ul>
      </DivContatos>
    </DivFooter>
  );
}

export default Footer;
