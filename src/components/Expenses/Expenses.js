import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpesnsesList from "./ExpensesList";
import ExpesnsesChart from "./ExpensesChart";

const Expenses = (props)=>{
  const [filterYear, setFilterYear] = useState('2020');
  const getFilterValue = (prop) => {
    setFilterYear(prop);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  })

    return(
      <div>
        <Card className="expenses">.
        <ExpensesFilter selected={filterYear} filterValue={getFilterValue}/>
        <ExpesnsesChart expenses={filteredExpenses}/>
        <ExpesnsesList items={filteredExpenses}/>
      </Card>
      </div>
    )
};

export default Expenses;