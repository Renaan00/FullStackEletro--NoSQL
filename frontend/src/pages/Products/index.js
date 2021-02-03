import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

import HeaderSection from '../../components/HeaderSection'; 
import Footer from '../../components/Footer';

import Titles from '../../objects/Titles';
import SubTitles from '../../objects/SubTitles';

const Products = () => {
    const [product, setProduct] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost:8080/products";
        const response = await fetch(url);
        setProduct(await response.json());    
    }, []);

    const ExibeProdutos = (cat) => {
        let items = document.getElementsByClassName("box-card");
        for (let i = 0; i < items.length; i++) {
            if (cat == items[i].id) {
                items[i].style = "display:inline-block;";
            }
            else 
            {
                items[i].style = "display:none";
            }
        }
    }
    const ExibeTodosProdutos = () => {
        let items = document.getElementsByClassName("box-card");
        for (let i = 0; i < items.length; i++) {
            items[i].style = "display:inline-block;";
        }
    }

    return (
        <div className="container-fluid">
            <main>
                <HeaderSection>Nossos Produtos</HeaderSection>
                <div className="container-products">
                    <div className="section-list">
                        <ul className="list-group" id="section-prod">
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={ExibeTodosProdutos}>
                                Todos
                                <span className="badge badge-primary badge-pill">12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => ExibeProdutos("geladeira")}>
                                Geladeiras
                                <span className="badge badge-primary badge-pill">3</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => ExibeProdutos("fogao")}>
                                Fogões
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => ExibeProdutos("micro-ondas")}>
                                Microondas
                                <span className="badge badge-primary badge-pill">3</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => ExibeProdutos("lavadora de roupas")}>
                                Lavadoura de roupas
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => ExibeProdutos("lava-louça")}>
                                Lava-louça
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                        </ul>
                    </div>
                    <div className="section-products">
                    {product.map((element) => {
                        let description = element.descricao;
                        if (description.length > 55) {
                            description = description.substring(0, 55)+'...';
                        }
                        
                        return (
                            <div className="box-card" id={element.nome_produto} key={element.idproduto}>
                                <div className="card">                             
                                    <img className="card-img-top" src={`/imgpages/${element.imagem}`} alt={element.nome_produto}/>
                                    <div className="card-body">
                                        <SubTitles>{description}</SubTitles>
                                        <Titles>R${element.preco}</Titles>
                                        <hr />
                                        <Link to={() => `/Pedido/${element.idproduto}/${element.descricao}`} className="btn btn-primary" style={{width:245}}>Comprar</Link>
                                    </div>
                                </div>
                            </div>
                        ); 
                    })}
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Products;
