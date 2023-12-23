import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'

function Favoritos () {
    const [ListFavoritos, setList] = useState([])
    
    useEffect(() => {
        const myList = localStorage.getItem('@listProducts')
        let res = JSON.parse(myList) || []
        setList(res)
    }, [])

    
    function excluir (id) {
        let filtroList = ListFavoritos.filter((item) => {
            return (item.id !== id)
        })

        setList(filtroList)
        localStorage.setItem('@listProducts', JSON.stringify(filtroList))
    }


    return(

        
        <div id="container-catalogo">
            {ListFavoritos.length === 0 &&  <span>Voce não tem nenhum produto na lista de favoritos !!</span>}
            {ListFavoritos.map((lista) => (
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
                    <div className="box-icons">
                        <div className=""><Link className="ver-mais" to={`/detalhesProducts/${lista.id}`}><i class='bx bx-cart-download'></i> </Link></div>
                        <div className="" onClick={() => excluir(lista.id) } ><i class='bx bxs-message-alt-x'></i></div>

                    </div>
                    <div></div>
                </div>
            ))}
        </div>
    )
}

export default Favoritos