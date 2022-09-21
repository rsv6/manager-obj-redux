import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setCliente } from '../../redux/clienteReducer';

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

export const Pesquisa = () => {
  const [ nomeCli, setNomeCli ] = useState('');
  const [ pedidoCli, setPedidoCli ] = useState(0);
  const [ emailCli, setEmailCli ] = useState('');
  const [ foneCli, setFoneCli ] = useState(0);
  const [ filialCli, setFilialCli ] = useState('');
  const [ ipCli, setIPCli ] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cliente } = useAppSelector(state => state.cliente);
  

  useEffect(() => {
    setNomeCli(cliente.nome);
    setPedidoCli(cliente.pedido);
    setEmailCli(cliente.email);
    setFoneCli(cliente.fone);
    setFilialCli(cliente.filial);
    setIPCli(cliente.ip);

  }, [ cliente.nome, 
    cliente.pedido, 
    cliente.email, 
    cliente.fone, 
    cliente.filial, 
    cliente.ip]);

  const handleChangeCliente = () => {

    dispatch(setCliente({
      nome: nomeCli,
      pedido: pedidoCli,
      email: emailCli,
      fone: foneCli,
      filial: filialCli,
      ip: ipCli,
    }))  
    timeOf();
  } 
  
  function timeOf() {
    setTimeout(() => {
      navigate('/feedback');
    }, 2000)
  }

  return <div>
    <div>Pesquisa</div>
    <input type="text" value={nomeCli} onChange={e => setNomeCli(e.target.value)}/>
    <br />
    <input type="text" value={ipCli} onChange={e => setIPCli(e.target.value)} />
    <br />
    <button onClick={handleChangeCliente}>Alerar</button>
  </div>
}
