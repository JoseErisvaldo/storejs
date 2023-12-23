import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/Apis";
import './style.css';
import NavBar from "../../Components/NavBar";

function DetalhesProducts() {
  const [dadosVer, setDados] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function LoadingVerMais() {
      try {
        const response = await api.get(`/products/${id}`);
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }

    }


    LoadingVerMais();
  }, [id]);

  function favorito () {
    //Criar list no localStorange
    const listProducts = localStorage.getItem('@listProducts')

    // Verificar se ja existe o localStorange, se não existir cria o array vazio
    const favList = JSON.parse(listProducts) || []

    // verificar se o ID que estou tentando adicionar existe na lista !!
    const hasProducts = favList.some((list) => list.id === dadosVer.id)

    //Exibir a mensagem caso o produto estiva sido adicionado
    if(hasProducts) {
      alert('Produto ja adicionando a lista !')
      return
    }

    // adicionar no array ( push )
    favList.push(dadosVer)

    //setar no LocalStorange
    localStorage.setItem('@listProducts', JSON.stringify(favList))
    // alert que foi setado
    alert('Produto salvo !!')
  }


  function addCarinho (id) {
    //Criar list no localStorange
    const listOrder = localStorage.getItem('@listOrder')

    // Verificar se ja existe o localStorange, se não existir cria o array vazio
    const orderList = JSON.parse(listOrder) || []

    // verificar se o ID que estou tentando adicionar existe na lista !!
    const hasOrder = orderList.some((item) => item.id === dadosVer.id)

    //Exibir a mensagem caso o produto estiva sido adicionado
    if(hasOrder) {
      alert('Pedido ja adicioando ao carrinho !!')
      return
    }

    // adicionar no array ( push )
    orderList.push(dadosVer)

    //setar no LocalStorange
    localStorage.setItem('@listOrder', JSON.stringify(orderList))
    // alert que foi setado
    alert('Pedido adicionado ao carrinho !!')

  }
    


  return (
    <div id="container">
      <NavBar/>
      <div className="return" > <Link className="color-link" to={'/'} > <i class='bx bx-left-arrow-alt'></i> </Link> </div>
      <div className="card" id="card">
        <div className="card-header">{dadosVer.title}</div>
        <div className="card-content">
          <div className="container-img">
            <img className="product-image" src={dadosVer.thumbnail} alt="Imagem do Produto" />
          </div>
          <div className="product-info">
            <div className="favorito" onClick={favorito}><i className='bx bxs-heart' style={{ color: '#ff0000' }}></i></div>
            <p>Código: {dadosVer.id}</p>
            <p>Avaliação: {dadosVer.rating}</p>
            <p>Preço: <span className="price">{dadosVer.price}</span></p>
            <p>Preço Antigo: <span className="discount-price">{dadosVer.price}</span></p>
            <p>Métodos de Pagamento: XXX</p>
            
            <button className="btn-carrinho" onClick={() => addCarinho(dadosVer.id)} >Adicionar à sacola </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProducts;
