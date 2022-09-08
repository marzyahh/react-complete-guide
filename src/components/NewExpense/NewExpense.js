import React from "react";
import FormExpense from "./FormExpense";
import './NewExpense.css'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (expense) => {
       const enteredData = {
        ...expense,
        id: Math.random().toString()
       }
       props.onAddExpense(enteredData)
    }
    return <div className="new-expense">
        <FormExpense onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}
export default NewExpense;