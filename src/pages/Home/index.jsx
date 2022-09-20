import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCliente } from '../../redux/clienteReducer';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setCliente({
      nome: 'Rafael Santos',
      pedido: 342525,
      email: 'rafael@email.com',
      fone: 85989584546,
      filial: 'TG',
      ip: '10.1.1.34'      
    }))

  }, [dispatch])

  function timeOf() {
    setTimeout(() => {
      
      // dispatch(setCliente({
      //   nome: 'Rafael Santos',
      //   pedido: 342525,
      //   email: 'rafael@email.com',
      //   fone: 85989584546,
      //   filial: 'TG',
      //   ip: '10.1.1.34'      
      // }))


      navigate('/pesquisa');
    }, 2000)
  }

  return <>
    <div>Home</div>
    { 
    timeOf()
    }
  </>
}
