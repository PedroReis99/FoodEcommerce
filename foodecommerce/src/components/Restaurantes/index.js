import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Tempo, ArrowRight, ArrowInferior } from './style';

import './style.css';

const Restaurantes = ({ modules }) => {

    const [ selectedItem, setSelectedItem ] = useState([]);

    function handleSelected(id){
        const selected = selectedItem.findIndex(item => item === id);

        if(selected >= 0){
            const itemFilter = selectedItem.filter(item => item !== id);

            setSelectedItem(itemFilter);
        } else{
            setSelectedItem([...selectedItem, id]);
        }
    }

    return(
        <div className="Restaurante">
            <div className="Title-food">
                <h2>Restaurantes 🍔</h2>
                <button> <Tempo /> Delivery: <b> Now  </b> <ArrowInferior /> </button>
            </div>
            <div className="Escolha-food">
                {modules.map(module => (
                    <section 
                        className={ selectedItem.includes(module.id) ? 'Item Selected' : 'Item'} 
                        onClick={() => handleSelected(module.id)} >
                        <img src={module.img_url} alt={module.title}/>
                        <h4>{module.title}</h4>
                    </section>
                ))}
                <ArrowRight />
            </div>
        </div>
    );
}

export default connect(state => ({ modules: state.courseRestaurantes.module }))(Restaurantes);