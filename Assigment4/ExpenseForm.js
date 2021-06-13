import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [showPanel, setShowPanel] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (showPanel === false) {
      setShowPanel(true);
    } else {
      const expenseDate = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpendData(expenseDate);

      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
      setShowPanel(false);
    }
  };

  const cancelHandler = (event) => {    
    setShowPanel(false);
  };

  let newExpenseButton = <button type="submit">New Expense</button>;
  let cancelButton = <button onClick={cancelHandler}>Cancel</button>;

  const body = (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
    </div>
  );

  console.log(showPanel);

  return (
    <form onSubmit={submitHandler}>
      {showPanel && body}
      <div>
        <div className="new-expense__actions">
          {showPanel && cancelButton}
          {newExpenseButton}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
