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
            <Route path="/dashboard" element={<DashBoard/>} />
            {/* <Route path="/dashboard/listar" element={<ListarPets/>} /> */}
            
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
