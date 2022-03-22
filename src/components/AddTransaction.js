import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/Globalstate";


export const AddTransaction = () => {
  const [desc, setdesc] = useState("");
  const [amount, setamount] = useState(0);
  const {AddTransaction}=useContext(GlobalContext)
  
  const onsubmit=(e)=>{
    e.preventDefault()

    const newTransaction={
      id:Math.floor(Math.random()*10000),
      description:desc,
      ammount:+amount
    }
    AddTransaction(newTransaction)
  }
  
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Detail of Transaction"
            value={desc}
            onChange={(e)=>setdesc(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="TransactionAmmount">Transaction Ammount</label>
          <input
            type="number"
            name="TransactionAmmount"
            id="TransactionAmmount"
            placeholder="Transaction Amount"
            value={amount}
            onChange={(e)=>setamount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">Add Transaction</button>
      </form>
    </div>
  );
};


