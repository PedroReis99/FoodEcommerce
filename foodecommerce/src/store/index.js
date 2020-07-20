import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from './reducers';
//import cartReducer from './action/cart';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer);

const persistor = persistStore(store)

export { store, persistor };