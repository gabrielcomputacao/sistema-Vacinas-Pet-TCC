import Container from "../layout/Container";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import CadastrarVacinas from "./CadastrarVacinas";
import ListarPets from "./ListarPets";
import ListarVacinas from "./ListarVacinas";
import Sobre from "./Sobre";
import AnimaisCadastro from "./AnimaisCadastro"

function DashBoard(props) {

  function renderizar(content){
      if(content === "sobre"){
        return <Sobre/>
      }else if(content === "listar"){
        return <ListarPets/>
      }
      else if(content === "cadastrar"){
        return <CadastrarVacinas/>
      }
      else if(content === "vacinas"){
        return <ListarVacinas/>
      }else if(content === "animais"){
        return <AnimaisCadastro/>
      }
  }


  return (
    <div>
      <Navbar />
      <Container>
        {renderizar(props.content)}
      </Container>
      
      <Footer />
    </div>
  );
}

export default DashBoard;
