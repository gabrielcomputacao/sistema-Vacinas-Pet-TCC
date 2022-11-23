
import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name:"checkUser",
    initialState:{
        iduser: 0,
        nome: '',
        endereco:{
            rua: '',
            numero: 0,
            cep:'',
        },
    },
    reducers:{
        checkinUser(state, {payload}){
            return{
                ...state,
                iduser: payload.idusuario,
                nome: payload.name,
            };
        },
        checkinEndereco(state, {payload}){
            return{
                ...state,
                endereco:{
                    rua: payload.rua,
                    cep: payload.cep,
                    numero: payload.numero,
                }
            }
        }
    }
    
})

export const  {checkinUser,checkinEndereco} = slice.actions

export default slice.reducer

export const selectUser = (state) => state.usercheck
