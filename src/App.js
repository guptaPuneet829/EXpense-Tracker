import './App.css';
import {AddTransactionDetails} from './components/AddTransactionDetails';
import {CurrentBalance} from './components/CurrentBalance';
import {Header} from "./components/Header";
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionList} from './components/TransactionList';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <CurrentBalance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactionDetails />
      </div>
    </GlobalProvider>
  );
}

export default App;
