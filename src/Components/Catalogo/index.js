import { useEffect, useState } from "react"
import api from "../../Services/Apis"
import './style.css'
import { Link } from "react-router-dom"
function Catalogo () {

    const [catalogo, setCatalogo] = useState([])

    useEffect(()=> {
        async function LoadingCatalogo () {
            await api.get('/products', {
                params: {
                    limit: 100
                }
            })
            .then((response)=> {
                setCatalogo(response.data.products)
            })
        }
        LoadingCatalogo ()
       
    },[])


    return(
        <div>
            <h2>Mais ofertas para você</h2>
                <div id="container-catalogo">
            
                {catalogo.map((lista) => {
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

export default Catalogo