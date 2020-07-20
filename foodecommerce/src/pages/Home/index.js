import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SetaDireita } from './style';

import './style.css';
import Restaurantes from '../../components/Restaurantes';
import Comida from '../../components/Comidas';
import Search from '../../components/Search';
import Lateral from '../../components/Lateral';

class Home extends Component{
    render(){
        return(
            <div className="Container-Geral">
                <div className="Content-Info">
                    <div className="Content-Home">
                        <Search />
                        <div className="Promo-Info">
                            <h2>$0 delivery for 30 days! 🎉</h2>
                            <label>$0 delivery fee for orders over $10 for 30 days</label>
                            <Link to="/noticias">
                                <p>Learn more <SetaDireita /></p>
                            </Link>
                        </div> 
                        <Restaurantes />
                        <Comida />
                    </div>
                    <Lateral />
                </div>  
                   
            </div>
        );
    }
}

export default Home;