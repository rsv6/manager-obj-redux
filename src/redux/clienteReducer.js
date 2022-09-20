import { createSlice } from "@reduxjs/toolkit";

export const clienteSlice = createSlice({
  name: 'cliente',
  initialState: {
    nome: '',
    pedido: 0,
    email: '',
    fone: 0,
    filial: '',
    ip: ''
  },
  reducers: {
    setCliente: (state, { payload } ) => {
      state.nome = payload.nome;
      state.pedido = payload.pedido;
      state.email = payload.email;
      state.fone = payload.fone;
      state.filial = payload.filial;
      state.ip = payload.ip;
    }
  }
});

export const { setCliente } = clienteSlice.actions;

export default clienteSlice.reducer;