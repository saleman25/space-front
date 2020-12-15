import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import astronomyReducer from './reducers/astronomyReducer';
import roverReducer from './reducers/roverReducer';
import technologyReducer from './reducers/technologyReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    astronomy: astronomyReducer,
    rover: roverReducer,
    technology: technologyReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
