import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {id: 1, title: 'Calculator', amount: '250', date: new Date(2020, 7, 14)},
  {id: 2, title: 'Petrol', amount: '300', date: new Date(2021, 9, 1)},
  {id: 3, title: 'Burger', amount: '88', date: new Date(2021, 8, 5)}
]

const App = () => {
  //old way of using jsx
  // return React.createElement('div', {}, React.createElement(Expenses, {items:expenses}))

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (expense)=> {
      setExpenses((previousExpenses)=>{
        return [expense, ...previousExpenses]
      });
  }

  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
