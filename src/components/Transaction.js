import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalstate";

export const Transaction = ({transaction}) => {
    const sign =transaction.ammount>0?'+':'-';
    const {deleteTransaction}=useContext(GlobalContext)
  return (
    <li className={transaction.ammount>0?"plus":"minus"} >
      {transaction.description}
      <span>{sign} ${Math.abs(transaction.ammount)}</span>
      <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  );
};

