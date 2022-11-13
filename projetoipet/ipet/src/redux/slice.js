
import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name:"checkUser",
    initialState:{
        iduser: 0,
        nome: '',
    },
    reducers:{
        checkinUser(state, {payload}){
            return{
                ...state,
                iduser: payload.id,
                nome: payload.name,
            };
        }
    }
    
})

export const  {checkinUser} = slice.actions

export default slice.reducer

export const selectUser = (state) => state.usercheck
