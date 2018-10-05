export default (store) => (next) => (action) => {
    if(!action.payload || !action.payload.then){//if there's no payload or if action.payload is not a promise
        return next(action);
    }
    //if the code makes this til here, we have a promise
    action.payload.then((resp)=>{
        const newAction = {
            ...action,
            payload: resp
        }

        store.dispatch(newAction);//any time you change an action, you need to re-dispatch it
    });

    return action.payload;//return the promise
}



// fuction(store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }