import { BrowserRouter,Routes,Route } from "react-router-dom"
import Clientes from "./pages/Clientes"
import Productos from "./pages/Productos"
import Cursos from "./pages/Cursos"
import MatrizPermisos from "./pages/MatrizPermisos"
import Sedes from "./pages/Sedes"
import SeccionesPeriodo from "./pages/SeccionesPeriodo"
import Horario from "./pages/Horario"
function App() {
  return (
  <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Cursos/>}/>
      <Route path='/Cliente' element={<Clientes/>}/>
      <Route path='/Producto' element={<Productos/>}/>
      <Route path='/permisos' element={<MatrizPermisos/>}/>
      <Route path='/sedes' element={<Sedes/>}/>
      <Route path='/secciones' element={<SeccionesPeriodo/>}/>
      <Route path='/horario' element={<Horario/>}/>
     </Routes>
    </BrowserRouter>   
  </>
  )
}

export default App
