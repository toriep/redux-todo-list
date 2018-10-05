import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=thisisdefinitelyunique';

export function getListData(){//async makes a function automatically return a promise
    const resp = axios.get(`${BASE_URL}/todos/${API_KEY}`);//await in this case doesn't stop your code
    return{
        type: types.GET_LIST_DATA,
        payload: resp//redux-promise just put resp and put it to payload without the use of async await
    }
}

export function addListItem(item){
    const resp = axios.post(`${BASE_URL}/todos/${API_KEY}`,item);//second argument of post is the object you want to send
    
    return {
        type: types.ADD_LIST_ITEM,
        payload: resp
    }
}

export function getSingleItem(id){
    const resp = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return{
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}

export function clearSingleItem(){
    return {type: types.CLEAR_SINGLE_ITEM};
}

export function toggleComplete(id){
    const resp = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);
    return {
        type: types.TOGGLE_COMPLETE,
        payload: resp
    }
}