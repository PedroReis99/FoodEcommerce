import { combineReducers } from 'redux';

import courseRestaurantes from './restaurantes';
import pratos from './pratos';
import pedido from './pedido';

export default combineReducers({
    courseRestaurantes,
    pratos,
    pedido,
});