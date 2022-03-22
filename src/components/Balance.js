import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'

export const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  const ammount=transactions.map((transaction)=>transaction.ammount)
  const total=ammount.reduce((acc,item)=>(acc+=item),0).toFixed(2)
  
  
  
  return (
    <div>
        <h4>Current Balance</h4>
        <h2>${total}</h2>
    </div>
  )
}

