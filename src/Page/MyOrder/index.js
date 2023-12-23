import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'
import Catalogo from "../../Components/Catalogo"

function MyOrder ( ) {
    const [listOrder, setList] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem('@listOrder')
        let res = JSON.parse(myList) || []
        setList(res)

    }, [])

    function excluir (id) {
        const filterOrder = listOrder.filter((item) => {
            return (item.id !== id)
        })
        setList(filterOrder)
        localStorage.setItem('@listOrder', JSON.stringify(filterOrder))
    }

    let priceTotal = listOrder.reduce((total, item) => total+ item.price, 0)

    
    const [order, setOrder] = useState([])
    function OrderFim () {
        console.log(listOrder)
    }

    return(
        <div >
            <h1 className="title-order">Sacola de pedidos</h1>
            <div id="container-catalogo">
                {order.map((item) => (
                    <>{item.id}</>
                ))}
                {listOrder.length === 0 &&
                <span className="status">   
                    Sua sacola está vazia.
                    Vá para a <Link to={'/'}> página inicial </Link> ou procure no site os produtos que vão te deixar feliz.
                    Quando encontrá-los, clique no botão adicionar à sacola 
                </span>
                }
                {listOrder.length >=1 &&
                    <div id="container-order">
                        <h2 className="title-dados">Dados do pedido</h2>
                        <div>
                        <p> Total de produtos: {listOrder.length}</p>
                        <p> Custo total do pedido: R$: {priceTotal}</p>
                        <div>
                            <h4>Endereço de entrega:</h4>
                            <p>Rua: Francisco viana de carvalho</p>
                            <p>Numero: 10</p>
                            <p>Completamento: Chácara</p>
                            <p>Estado: SP</p>
                            <p>Cidade: Louveira</p>
                        </div>
                        <div>
                            <h4>Dados do cliente</h4>
                            <p>Nome do remetente: José Erisvaldo</p>
                        </div>
                        <div className="finalizar-order">
                            <button onClick={OrderFim()} >Finalizar pedido</button>
                        </div>
                        </div>
                    </div>
                }
                <div id="card-catalogo">
                    {listOrder.map((lista) => (
                        <div className="cards-catalogo" key={lista.id}>
                            <div><img src={lista.thumbnail}class="img" alt="{lista.title}"/>
                            </div>
                            <div className="title">{lista.title}</div>
                            <div className="price">
                                <div className="real-price"><s>R$: {lista.price}</s> </div>
                                <div className="discount">
                                {lista.price && Math.round((lista.price / 100) * lista.discountPercentage)}

                                </div>
                            </div>
                            <div className="stock">Quantidade: 1</div>
                            <div className="box-icons">
                                <div className="" onClick={() => excluir(lista.id) } ><i class='bx bxs-message-alt-x'></i></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default MyOrder