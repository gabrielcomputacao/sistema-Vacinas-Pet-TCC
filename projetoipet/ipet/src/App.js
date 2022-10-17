import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import DashBoard from "./components/pages/DashBoard";
/* import ListarPets from "./components/pages/ListarPets"; */



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login/>}/>

            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/dashboard" element={<DashBoard content="sobre"/>} />
            <Route path="/listar" element={<DashBoard content="listar"/>} />
            <Route path="/cadastrar-vacina" element={<DashBoard content="cadastrar"/>} />
            <Route path="/listar-vacina" element={<DashBoard content="vacinas"/>} />
            <Route path="/animais-cadastro" element={<DashBoard content="animais"/>} />
            
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
