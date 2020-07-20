import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Cartao, Dinheiro, Remover, AddItem, RemoveItem } from './style';
import './style.css';
import { removePedido, UpdateQuantidadePedido } from '../../store/actions/pedido';
import Search from '../../components/Search';

function Carrinho(){

    const dispatch = useDispatch();
    const pedido = useSelector(state => state.pedido);

    const total = useSelector(state => 
        state.pedido.reduce((totalSum, item) => {
            return totalSum + item.preco * item.amount;
        }, 0),
    );

    function handleRemove(id){
        dispatch(removePedido(id));
    }

    function DiminuirItem(quant){
        dispatch(UpdateQuantidadePedido(quant.id, quant.amount -1));
    }

    function AumentarItem(quant){
        dispatch(UpdateQuantidadePedido(quant.id, quant.amount +1));
    }

    return(
        <div className="Container-Kart">
            <Search />
            <section className="ItemsCarrinho">
                <ul>
                {pedido.map(cart => (
                    <li key={cart.id}>
                    <img src={cart.image_url} alt=""/>
                    <section>
                        <div className="qtdItem">
                            <RemoveItem onClick={() => DiminuirItem(cart)}/>
                            <p>{cart.amount} x</p>
                            <AddItem onClick={() => AumentarItem(cart)} />
                        </div>
                        <h4>{cart.name}</h4>
                        <label >{cart.amount * cart.preco}</label>
                        <Remover onClick={() => handleRemove(cart.id)}/>
                    </section>
                </li>
                ))}
                </ul>
            </section>
            <section className="FinalizarPagamento">
                <h1>Finalizar pagamento: R$ {total}</h1>
                <div className="Metodo">
                    <button className="Ajuste"><Dinheiro /></button>
                    <button><Cartao /></button>
                    <Link >
                        <button>
                            Finalizar
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Carrinho;