import React from 'react';
import { Link } from 'react-router-dom';
import { LinhasMenu, Lupa } from './style';

import './style.css';


function Search(){
    return(
        <header className="MenuSearch-bar">
            <section>
                <LinhasMenu />
                <Link to="/">
                    <h2>Chukwudi</h2>
                </Link>
            </section>
            <form action="" onSubmit>
                <Link to="/pesquisa">
                    <button><Lupa /></button>
                </Link>
                <input type="text" placeholder="Search" />
            </form>
        </header>
    );
}

export default Search;