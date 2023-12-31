import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducerUser from './reducerUser';
import reducerRecipe from './rducerRecipe'
import {thunk} from 'redux-thunk'


const reducers= combineReducers({
    user:reducerUser,
    recipe: reducerRecipe
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;