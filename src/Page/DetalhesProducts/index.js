import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/Apis";
import './style.css';


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

  console.log(dadosVer);

  return (
    <div id="container">
      <div className="return" > <Link className="color-link" to={'/'} > <i class='bx bx-left-arrow-alt'></i> </Link> </div>
      <div className="card" id="card">
        <div className="card-header">{dadosVer.title}</div>
        <div className="card-content">
          <div className="container-img">
            <img className="product-image" src={dadosVer.thumbnail} alt="Imagem do Produto" />
          </div>
          <div className="product-info">
            <p>Código: {dadosVer.id}</p>
            <p>Avaliação: {dadosVer.rating}</p>
            <p>Preço: <span className="price">{dadosVer.price}</span></p>
            <p>Preço Antigo: <span className="discount-price">{dadosVer.price}</span></p>
            <p>Métodos de Pagamento: XXX</p>
            <button className="btn-carrinho">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProducts;
