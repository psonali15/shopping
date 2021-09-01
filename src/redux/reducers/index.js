import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './productReducers';

const reducers = combineReducers({
    allProducts : productReducer,
    singleProduct : selectedProductReducer 
});

export default reducers

