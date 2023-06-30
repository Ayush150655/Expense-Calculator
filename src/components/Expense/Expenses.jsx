import ExpenseItem from "./ExpenseItem.jsx";
import "./../ExpenseStyling/ExpenseItem.css";
import "./../ExpenseStyling/Expenses.css";
import Card from "./Card.jsx";
import ExpenseChart from "./ExpenseChart.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const yearChangeHandler = (newYear) => {
    setFilterYear(newYear);
  };

  const showExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onSelectedYear={yearChangeHandler} />
      {showExpenses.length === 0 ? (
        <Card className="expense-item__fallback">No Expenses this Year</Card>
      ) : (
        <>
          <ExpenseChart expenses={showExpenses} />
          {showExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))}
        </>
      )}
    </Card>
  );
};
export default Expenses;
