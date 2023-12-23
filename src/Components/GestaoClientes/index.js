import { useEffect, useState } from "react"
import apiClientes from "../../Services/apiClientes"
import './style.css'
import { Link } from "react-router-dom"
function GestaoClientes () {
    const [listClietnes, setClientes] = useState([])
    useEffect(() => {
        async function loadingClientes () {
            await apiClientes.get('/users',{
                params: {
                    limit: 100
                }
            })
            .then((response) => {
                setClientes(response.data.users)
            })
        }
        loadingClientes ()
    }, [])

    function verCliente(id) {
        alert(id)
    }

    return(
        <div>
            <h2>Gestão de Clientes</h2>
            <div id="container-clientes">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Id</th>
                            <th>Primeiro nome</th>
                            <th>Idade</th>
                            <th>Genero</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listClietnes.map((item) => (
                            <tr key={item.id}>
                                <td> <img src={item.image} /> </td>
                                <td >{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td> <Link to={`/detalhescliente/${item.id}`} > Ver mais </Link>  </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default GestaoClientes