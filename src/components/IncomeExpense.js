import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc = acc + item),0 ).toFixed(2);
     const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc+= item),0).toFixed(2);
     const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0) * -1).toFixed(2)
    return (
        <>
          <div className="income-expense">
              <div className="income">
                  <h5>Income</h5>
                  <p id="money-plus">${income}</p>
              </div>
              <div className="expense">
                  <h5>Expense</h5>
                  <p id="money-minus">${expense}</p>
              </div>
          </div>  
        </>
    )
}
