import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// import ExpenseItem from './components/ExpenseItems';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// import ExpenseFilter from './components/Expense/ExpenseFilter';

const INITIALIZE_EXPENSE = [
  { id: 'e1', title: 'Toilet Paper', amount: 93.89, date: new Date(2022, 2, 13), },
  { id: 'e2', title: 'New Tv', amount: 65, date: new Date(2020, 2, 22), },
  { id: 'e3', title: 'New Desk(Wooden)', amount: 500.65, date: new Date(2021, 4, 17), },
  { id: 'e4', title: 'Car Insurance', amount: 345.65, date: new Date(2022, 2, 28), }
]
function App() {
 const [expenses, setExpenses] = useState(INITIALIZE_EXPENSE);

  const addExpenseHandler = (expense1) => {
    setExpenses((prevState) => {
      return [expense1, ...prevState]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}  />
    </div>

  );
}

export default App;
