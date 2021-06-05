import {useState} from 'react';

import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  
  const [filterYear, setFilterYear]  = useState('');
  
  const changeYearHandler = (year) => {    
    setFilterYear(year) ;
  };

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter onChangeYear={changeYearHandler} />
        {props.data.filter((expense) => expense.date.getFullYear() == filterYear).map((expense) => (          
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
