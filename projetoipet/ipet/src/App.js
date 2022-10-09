import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
