import "./App.css";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
 
  // it gets data from the Expense form in format {name,date,price}
  const addExpenseHandler = (expense) => {
    console.log("In App.js");

    console.log(expense);
    setItems([...items, expense]);
  };

  const onDelete=(id)=>{
      const index = items.findIndex(function(item){
        return item.id === id
      });
      items.splice(index,1);
      setItems(items);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      {items.map((item) => {
        return (
          <ExpenseItem onDelete={onDelete} id={item.id} name={item.name} price={item.price} date={item.date} />
        );
      })}
    </div>
  );
};
export default App;
