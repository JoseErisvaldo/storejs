import NavBar from '../../Components/NavBar'
import Catalogo from '../../Components/Catalogo'
import Destaque from '../../Components/Destaque'
function Inicio() {
  return (
    <div className="container'">
      <Destaque />
      <Catalogo />
    </div>
  )
}

export default Inicio
