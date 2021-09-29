import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState('2021-09-21');

  // const [userInput, setUserInput ] =useState ({
  //   enteredName:"",
  //   enteredPrice:"",
  //   enteredDate:"",
  // })

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);

    //setUserInput({...userInput, enteredName: event.target.value});
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);

    //setUserInput({...userInput, enteredPrice:event.target.value});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //setUserInput({...userInput, enteredDate:event.target.value});
  };

  const submitHandler = (event) => {
    
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredName("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
