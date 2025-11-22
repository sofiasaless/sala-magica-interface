import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Produtos } from "./pages/Produtos";
import { Favoritos } from "./pages/Favoritos";
import { Perfil } from "./pages/Perfil";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >

          <Route path="/" element={<Inicio />}/>
          <Route path="/produtos" element={<Produtos />}/>
          <Route path="/favoritos" element={<Favoritos />}/>
          <Route path="/perfil" element={<Perfil />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}