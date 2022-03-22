import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'

export const AccountSummary = () => {
  const {transactions}=useContext(GlobalContext)
  let ammount=transactions.map((transaction)=>transaction.ammount)

  let Income=ammount.filter((item)=>{
    return item > 0 
  }).reduce((acc,item)=>{
    return acc+=item
  },0).toFixed(2)

  let Expense=ammount.filter((item)=>{
    return item<0
  }).reduce((acc,item)=>acc+=item,0)

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>${Income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>${Expense.toFixed(1)}</p>
        </div>
    </div>
  )
}

 