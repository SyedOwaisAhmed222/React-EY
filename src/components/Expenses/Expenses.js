import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const  Expenses=(props)=>{
  return(
    <Card className='expenses'>
  <ExpenseItem date={new Date(2021, 6,19)} name={"Saqib's Corolla"} price={"Rs 25 lac/-"}/>
      <ExpenseItem date={new Date(2017, 6,18)} name={"Owais Tesla"} price={"Rs 50 lac/-"}/>
      <ExpenseItem date={new Date(2011, 6,16)} name={"Shakir's Slto"} price={"Rs 5 lac /-"}/>
      <ExpenseItem date={new Date(2010, 6,20)} name={"Dani's Land Cruiser"} price={"Rs 2.5 carore/-"}/>
</Card>
  )
} 
export default Expenses;