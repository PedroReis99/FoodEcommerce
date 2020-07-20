import React from 'react';

import { Estrela } from './style';
import './style.css';

function Comidas(){
    return(
        <div className="Content-Foods">
            <div className="Comida">
                <section className="Prato1">             
                    <span>25-30 <p>min</p></span>
                </section>
                <h2>Bagel Story</h2>
                <div className="InfoFood">
                    <Estrela />
                    <label>4.7</label>
                    <p>Deli • Bagels • $$</p>
                </div>
            </div>
            <div className="Comida">
                <section className="Prato2">             
                    <span>30-35 min</span>
                </section>
                <h2>The Staminet</h2>
                <div className="InfoFood">
                    <Estrela />
                    <label>4.5</label>
                    <p>Cafes • Burgers • $</p>
                </div>
            </div>
            <div className="Comida">
                <section className="Prato3">             
                    <span>25-30 <p>min</p></span>
                </section>
                <h2>Bagel Story</h2>
                <div className="InfoFood">
                    <Estrela />
                    <label>4.7</label>
                    <p>Deli • Bagels • $$</p>
                </div>
            </div>
        </div>
    );
}

export default Comidas;