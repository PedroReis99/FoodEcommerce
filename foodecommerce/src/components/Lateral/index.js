import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserIcon, TimerIcon, ArrowRight } from './style';
import './style.css';


function Lateral(){
    
    const [ qtdPessoas, setQtdPessoas ] = useState(1);

    const countItemsCart = useSelector(state => state.pedido.length);
    const Pedido = useSelector(state => state.pedido);

    const total = useSelector(state => 
        state.pedido.reduce((totalSum, item) => {
            return totalSum + item.preco * item.amount;
        }, 0),
    );

    function Diminuir(){
        if(qtdPessoas <= 1){
            setQtdPessoas(qtdPessoas + 0);
            alert('Minimo de 1 pessoa por pedido');
        } else {
            setQtdPessoas(qtdPessoas - 1);
        }
    }

    function Aumentar(){
        if(qtdPessoas >=20){
            setQtdPessoas(qtdPessoas + 0);
            alert('Maximo de 20 pessoas por pedido');
        } else {
            setQtdPessoas(qtdPessoas + 1);
        }
    }

    return(
        <div className="Lateral">
            <section className="User">
                <UserIcon />
                <span>{countItemsCart}</span>
            </section>
            <section className="Order">
                <h1>My 🤩<br/>Order</h1>
                <div className="Address">
                    <section>
                        <h3>625 St Marks Ave</h3>
                        <h2>Edit</h2>
                    </section>
                    <section>
                        <span className="Time">
                            <TimerIcon /> 35min
                        </span>
                        <h2>Choose time</h2>
                    </section>
                </div>
            </section>
                <section className="Pedido">
                    {Pedido.map(item => (
                        <div className="ItemPedido" key={item.Id}>
                            <img src={item.image_url} alt={item.name}/>
                            <p>{item.amount} x</p>
                            <h4>{item.name}</h4>
                            <label>{item.amount * item.preco}</label>
                        </div>
                    ))}
                </section>
            <section className="TotalPedido">
                <p>Total:</p>
                <p>$ {total}</p>
            </section>
            <section className="Checkout">
                <div className="Quantidade">
                    <p>Persons</p>
                    <div className="Contador">
                        <button className="Diminuir" onClick={Diminuir}>
                            -
                        </button>
                        <h1>{qtdPessoas}</h1>
                        <button className="Aumentar" onClick={Aumentar}>
                            +
                        </button>
                    </div>
                </div>
                <Link to="/carrinho">
                    <button>Checkout <ArrowRight /></button>
                </Link>
            </section>
        </div>
    );
}

export default Lateral;