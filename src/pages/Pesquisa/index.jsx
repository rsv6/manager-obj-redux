import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Pesquisa = () => {
  
  const navigate = useNavigate();

  function timeOf() {
    setTimeout(() => {
      navigate('/sobre');
    }, 3000)
  }

  return <>
    <div>Pesquisa</div>
    {
      timeOf()
    }
  </>

}
