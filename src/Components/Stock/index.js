import { useEffect, useState } from "react"
import api from "../../Services/Apis"
import './style.css'

function Stock () {
    const [productStock, setStock] = useState([])
    useEffect(() => {
        async function LoadingStock () {
            await api.get('/products')
            .then((response) => {
                setStock(response.data.products)
            })
        }
        LoadingStock ()
    }, [])

    return(
        <div>
            <h2>Gestão de estoque</h2>
            <div id="container-stock">
                <div className="cards-stock">
                    <div className="img"> Imagem</div>
                    <div className="stock-title">Titulo</div>
                    <div className="stock-category">Cateroria</div>
                    <div className="stock-stock">Qtd Estoque</div>
                    <div className="stock-price">Preço Unitario</div>
                    <div className="stock-price-total">Preço Total</div>
                    <div className="stock-discountPercentage">% Desconto</div>
                </div>
                {productStock.map((item) => (
                    <div className="cards-stock">
                        <div className=""> <img src={item.thumbnail} class="img" alt={item.title} /> </div>
                        <div className="stock-title">{item.title}</div>
                        <div className="stock-category">{item.category}</div>
                        <div className="stock-stock">{item.stock}</div>
                        <div className="stock-price">{item.price}</div>
                        <div className="stock-price-total">{item.price}</div>
                        <div className="stock-discountPercentage">{item.discountPercentage} %</div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Stock