
import "./css/index.css"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Formulario from "./components/Formulario";
import Productos from "./components/Productos";
import { Routes, Route,} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
      <Route path="Formulario"element={<Formulario/>}/>
       <Route path="/"element={<Home/>}/>
       <Route path="Productos"element={<Productos/>}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
