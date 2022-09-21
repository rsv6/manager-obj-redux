import React from 'react'

import { useAppSelector } from '../../redux/hooks/useAppSelector'

export const Feedback = () => {

  const { cliente } = useAppSelector(state => state.cliente);

  return <div>
    <div>Feedback</div>
    <h3>Cliente: {cliente.nome}</h3>
    <h4>Ip: {cliente.ip}</h4>
  </div>
}
