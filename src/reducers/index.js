import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import listReducer from './list_reducer';

const rootReducer = combineReducers({
    list: listReducer,//whatever return from listReducer become value for key 'list'
    form: formReducer
})

export default rootReducer;
