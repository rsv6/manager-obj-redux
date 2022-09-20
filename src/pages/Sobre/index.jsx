import React from 'react'

import { useAppSelector } from '../../redux/hooks/useAppSelector';

export const Sobre = () => {

  const { cliente } = useAppSelector(state => state.cliente);
  
  return <>
    <p>Nome: {cliente.nome}</p>
    <div>Ip: {cliente.ip}</div>
  </>
  
}
