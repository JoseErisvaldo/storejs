
import GestaoClientes from "../../Components/GestaoClientes"
import Search from "../../Components/Search"
import Stock from "../../Components/Stock"
import './style.css'

function PainelAdm () {

    

    return(
        <div>
            
            <h1>Painel Administrativo</h1>
            <div className="nav-gestao">
                <ul>
                    <li>Gestão de estoque</li>
                    <li>Gestão de clientes</li>
                    <li>Gestão de vendas</li>
                </ul>
            </div>

            <GestaoClientes/>
        </div>
    )
}

export default PainelAdm