import {combineReducers} from 'redux' ; 
import userReducer from './user';
import adminReducer from './admin';
import productReducer from './product';
import orderReducer from './order'
const rootReducer = combineReducers({userReducer,adminReducer,productReducer,orderReducer})

export default rootReducer ;