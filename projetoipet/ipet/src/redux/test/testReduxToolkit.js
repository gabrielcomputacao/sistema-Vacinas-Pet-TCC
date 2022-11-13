import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "idUser",
  /* inicia o state atual */
  initialState: {
    iduser: 0,
    nome: "",
  },
  reducers: {
    /* ja escreve a action direto aqui dentro do reducer, isso porque esta usando
        reduz toolkit
    */
    checkUser(state, { payload }) {
      return {
        ...state,
        iduser: payload.id,
        nome: payload.name,
      };
    },
  },
});

/* exporta as actions */
export const { checkUser } = slice.actions;

/* exporta como padrao o reducer para ser pego e instanciado lá no store em que criamos */
export default slice.reducer;

/* essa const pega o state e armazena com relação ao nome do reducer que foi instanciado no store */
export const selectUser = (state) => state.usuarioCheck;

