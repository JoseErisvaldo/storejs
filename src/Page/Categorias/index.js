import { Link, useParams } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import { useEffect, useState } from "react"
import api from "../../Services/Apis"
import './style.css'

function Categorias () {
    const {categoria} = useParams()
    let [list, setList] = useState([])
    useEffect(() => {

        async function listCategory () {
           await api.get('/products', {
            params: {
                limit:100
            }
           })
           .then((response) => {
            setList(response.data.products)

           })
        }
        listCategory ()
    } , [])

    const res = list.filter(item =>  item.category === categoria)

    return(
        <div>
            <NavBar/>
            <div> <h1>Categorias</h1></div>
                <div id="container-catalogo">
                {res.map((lista) => {
                return(
                    <Link className="ver-mais" to={`/detalhesProducts/${lista.id}`}>
                    <div className="cards-catalogo" key={lista.id}>
                        <div><img src={lista.thumbnail}class="img" alt="{lista.title}"/>
                        </div>
                        <div className="rating">Avaliação {lista.rating}</div>
                        <div className="title">{lista.title}</div>
                        <div className="descripton">{lista.description}</div>
                        <div className="price">
                            <div className="real-price"><s>R$: {lista.price}</s> </div>
                            <div className="discount">
                            {lista.price && Math.round((lista.price / 100) * lista.discountPercentage)}

                            </div>
                        </div>
                        <div className="stock">Quantidade disponivel: {lista.stock}</div>
                        
                    </div>
                    </Link>
                    )
                })}
            </div>
        </div>

        
    )
}
export default Categorias