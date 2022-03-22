import React from "react";
import { Appreducer } from "./Appreducer";

const initialState = {
  transactions: [],
};

// export const GlobalContext = React.createContext(initialState);

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Appreducer, initialState);

  function deleteTransaction(id){
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    })
  }

  function AddTransaction(transaction){
    dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Create a Provider for the Global Context
// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = React.useReducer(Appreducer, initialState);

//     return (
//         <GlobalContext.Provider value={
//             {
//                 transactions: state.transactions,

//             }
//         }>
//             {children}
//         </GlobalContext.Provider>
//     );

// }
