import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React ,{useState} from "react";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);

  console.log(props);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>

      <div className="expense-item__description">
        <h2>{name}</h2>
      </div>
      <div className="expense-item__price">{props.price}</div>



      {/* <button
        onClick= <h1> waah bete waah</h1>
      >
        Change
      </button> */}


      <button
        onClick={()=> props.onDelete(props.id)}
      >
        Delete
      </button>


      {/* <button
        onClick={() => {
          console.log("Clicked OWais");
        }}
      >
        Change
      </button> */}


    </Card>
  );
};
export default ExpenseItem;
