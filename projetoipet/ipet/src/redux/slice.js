import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "checkUser",
  initialState: {
    iduser: 0,
    nome: "",
    endereco: {
      rua: "",
      numero: 0,
      cep: "",
    },
    animais: [],
    vacinas: [],
    tiposVacina: [],
    countVacinas: 1,
    numAnimais: 0,
    countAnimais: 1,
    countTiposVacina: 1,
  },
  reducers: {
    checkinUser(state, { payload }) {
      return {
        ...state,
        iduser: payload.idusuario,
        nome: payload.name,
      };
    },
    checkinEndereco(state, { payload }) {
      return {
        ...state,
        endereco: {
          rua: payload.rua,
          cep: payload.cep,
          numero: payload.numero,
        },
      };
    },
    checkHaveAnimais(state, { payload }) {
      return {
        ...state,
        animais: payload,
      };
    },
    checkNumAnimais(state, { payload }) {
      return {
        ...state,
        numAnimais: payload,
      };
    },
    checkCountAnimais(state, { payload }) {
      return {
        ...state,
        countAnimais: payload,
      };
    },
    checkVacinas(state, { payload }) {
      return {
        ...state,
        vacinas: payload,
      };
    },
    checkNumVacinas(state, { payload }) {
      return {
        ...state,
        countVacinas: payload,
      };
    },
    checkTiposVacina(state, { payload }) {
      return {
        ...state,
        tiposVacina: payload,
      };
    },
    checkCountTiposVacina(state, { payload }) {
      return {
        ...state,
        countTiposVacina: payload,
      };
    },
  },
});

export const {
  checkinUser,
  checkinEndereco,
  checkHaveAnimais,
  checkNumAnimais,
  checkCountAnimais,
  checkVacinas,
  checkNumVacinas,
  checkTiposVacina,
  checkCountTiposVacina,
} = slice.actions;

export default slice.reducer;

export const selectUser = (state) => state.usercheck;
