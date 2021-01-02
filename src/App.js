import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState'
import IncomeExpenses from './components/IncomeExpense'
import AddTransaction from './components/AddTransactions' 
import GlobalContext from './context/GlobalState'
 
function App() {

  
 
  return (
     
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
   
   
  );
}

export default App;
