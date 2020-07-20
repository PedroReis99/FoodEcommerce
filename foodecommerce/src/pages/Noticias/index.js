import React from 'react';

import './style.css';

import Search from '../../components/Search';

function News(){
    return(
        <div className="Container-News">
            <Search />
            <div className="News">
                <img src={require('../../assets/Delivery.jpg')} alt="Delivery"/>
                <p>Aproveite os 30 Dias de Delivery 100% gratuito para todos os 
                    seus pedidos!
                </p>
            </div>
        </div>
    );
}

export default News;