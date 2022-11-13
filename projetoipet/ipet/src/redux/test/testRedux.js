/* exemplo de pratica do redux usando somente um arquivo e usando somente um arquivo javascript
para entender o funcionamento da biblioteca
*/

const redux = require("redux")
/* se tornou obsoleto, agora e aconselhavel o uso do redux toolkit, ele diminui muito o trabalho
escrevendo codigo de redux
*/
const createStore = redux.createStore


/* action type */
const LOGIN_USER = "loginUser"

//actions

function loginUser(usuario){
    return {
        type: LOGIN_USER,
        info:"testando primeiro action",
        payload:usuario
    }
}

/* state inicial */
const initialState = {
    user:""
}

/* criando reducer */
function reducerUsuario( prevState = initialState , action){
    
    switch(action.type){
        case LOGIN_USER : {
            return{
                ...prevState,
                user: action.payload
            }
        }
        default :{
            return prevState
        }
    }
}



const store = createStore(reducerUsuario)

console.log("initial state" ,store.getState())

store.dispatch(loginUser("GABRIEL"))

console.log("second" , store.getState())
