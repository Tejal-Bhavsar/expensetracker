import React,{ createContext, useContext, useReducer } from 'react';
import AppReducer from '../context/AppReducer'

// Initial state
 const initialState = {
    transactions: [
        // {id:1, text:'flower',amount: -20},
        // {id:2, text:'salary',amount: 200},
        // {id:3, text:'book',amount: -120},
    ]
}
 

//context 
export  const GlobalContext = createContext(initialState);

export const GlobalProvider = ( { children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return(
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
     }}>

     {children}
    </GlobalContext.Provider>
  )
}

