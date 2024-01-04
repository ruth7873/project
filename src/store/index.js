import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducerUser from './reducerUser';
import reducerRecipe from './rducerRecipe'
import reducerBuy from './reducerBuy';
import {thunk} from 'redux-thunk'


const reducers= combineReducers({
    user:reducerUser,
    recipe: reducerRecipe,
    buy:reducerBuy
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;