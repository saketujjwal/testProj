import {createStore , applyMiddleware , compose} from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from './src/reducers';
import sagas from './src/sagas'

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleWare();

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(sagaMiddleware))
        
    );

    sagaMiddleware.run(sagas)
    return store;
};