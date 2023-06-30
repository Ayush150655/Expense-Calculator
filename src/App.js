import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/NewExpense";

const dummyExpenses = [
  { id: 1, title: "Flight Ticket", date: new Date(2020, 3, 10), amount: 18000 },
  { id: 2, title: "Taxi", date: new Date(2022, 4, 15), amount: 2500 },
  { id: 3, title: "Hotel", date: new Date(2021, 7, 18), amount: 45000 },
  { id: 4, title: "Food", date: new Date(2022, 3, 7), amount: 3000 },
  { id: 5, title: "Party", date: new Date(2020, 6, 19), amount: 10000 },
  { id: 6, title: "Medicine", date: new Date(2021, 2, 8), amount: 19000 },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
