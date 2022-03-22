import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalstate";
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
         
          return(
            <Transaction key={transaction.id} transaction={transaction}/>
          )
        })}
      </ul>
    </div>
  );
};
