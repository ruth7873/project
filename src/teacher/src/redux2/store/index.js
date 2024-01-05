import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './reducer';
import reducerRecipe from './rducerRecipe'
import { thunk } from 'redux-thunk'


const reducers = combineReducers({
    user: reducer,
    recipe: reducerRecipe
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;