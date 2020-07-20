import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import Pesquisa from './pages/Pesquisa';
import Carrinho from './pages/Carrinho';
import News from './pages/Noticias';
import { store, persistor } from './store';

class Routes extends Component{
    render(){
        return(
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor} >
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/pesquisa" component={Pesquisa} />
                            <Route exact path="/carrinho" component={Carrinho} />
                            <Route exact path="/noticias" component={News} />
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default Routes;