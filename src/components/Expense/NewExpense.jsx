import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./../ExpenseStyling/NewExpense.css";
import Card from "./Card";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(true);

  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(true);
  };

  const expenseHandler = () => {
    setAddNewExpense(false);
  };
  const cancelHandler = () => {
    setAddNewExpense(true);
  };

  return (
    <Card className="new-expense">
      {addNewExpense && (
        <button className="new-expense__actions" onClick={expenseHandler}>
          Add New Expense
        </button>
      )}
      {!addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </Card>
  );
};
export default NewExpense;
