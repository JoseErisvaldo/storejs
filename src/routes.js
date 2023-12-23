import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './page/Inicio'
import PainelAdm from './page/PainelAdm'
import DetalhesProducts from './page/DetalhesProducts'
import Search from './Components/Search'
import Categorias from './page/Categorias'
import Favoritos from './page/Favoritos'
import MyOrder from './page/MyOrder'
import Destaque from './Components/Destaque'
import DetalhesCliente from './page/DetalhesCliente'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/painelAdm" element={<PainelAdm />} />
        <Route path="/detalhesProducts/:id" element={<DetalhesProducts />} />
        <Route path="/categorias/:categoria" element={<Categorias />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/meuspedidos" element={<MyOrder />} />
        <Route path="/Destaque" element={<Destaque />} />
        <Route path="/detalhescliente/:id" element={<DetalhesCliente />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp
