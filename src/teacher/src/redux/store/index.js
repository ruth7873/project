import reducer from './reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';

// const  reducer=combineReducers({
//     user:reducer,
//     Shop:ShopTReducer
// })

const store = createStore(reducer, applyMiddleware(Thunk))


export default store;

