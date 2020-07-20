import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import { ShopCar } from './style';
import './style.css';
import { addPedido } from '../../store/actions/pedido';
import Search from '../../components/Search';

function Pesquisa({ modules }) {

    const dispatch = useDispatch();

    const countItemsCart = useSelector(state => state.pedido.length);

    function handleAdd(pratos){
        dispatch(addPedido(pratos));
    }

    return(
        <div className="Container-Resultados" >
            <Search />
            <Link to="/carrinho">
                <button className="MeuCarrinho" >Meu carrinho: {countItemsCart} <ShopCar /></button>
            </Link>
            <div className="Resultados">
                <ul>
                    {modules.map( pratos => (
                        <li key={pratos.id}>
                            <img src={pratos.image_url} alt={pratos.name}/>
                            <section>
                                <h2>{pratos.name}</h2>
                                <p>{pratos.descricao}</p>
                                <div className="AddCarrinho">
                                    <span>R$ {pratos.preco}</span>
                                    <ShopCar 
                                        onClick={() =>handleAdd(pratos)} />
                                </div>
                            </section>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    // pedidos: state.pedido,
    modules: state.pratos.modules 
});

export default connect( mapStateToProps )(Pesquisa);