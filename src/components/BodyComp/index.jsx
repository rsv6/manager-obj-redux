import React from 'react'
import { HeaderComp } from '../HeaderComp'
import { FooterComp } from '../FooterComp'

export const BodyComp = ({ children }) => {
  
  return <div>
    <HeaderComp />
    <hr />
    <div>{ children }</div>
    <br />
    <FooterComp />
  </div>
  
}
