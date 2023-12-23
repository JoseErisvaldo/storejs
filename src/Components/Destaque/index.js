import { useEffect, useState } from "react"
import api from "../../Services/Apis"
import { Link } from "react-router-dom"
import './style.css'

function Destaque () {
    const [listDestaque, setDestaque] = useState([])
    useEffect(() => {

        async function loadingDestaque () {
            await api.get('/products', {
                params: {
                    limit: 50
                }
            })
            .then((response) => {
                setDestaque(response.data.products)
            })
        }
        loadingDestaque ()
        
    }, [])
    
    const destaque = listDestaque.filter((item) => item.rating >= 4.82)
    

    return(
        <div>
            <h1> Destaque da semana !!</h1>
            <div id="container-destaque">
                
                    {destaque.map((lista) => (
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
                    ))}        
            </div>
        </div>
    )
}

export default Destaque