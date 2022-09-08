import React, {useState} from "react";
import './FormExpense.css'

const FormExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const enteredDateHandler = (event) => {
 
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // console.log(event.target.value)
    }
    const enteredPriceHandler = (event) => {
        setEnteredPrice(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // console.log(event.target.value)

    }

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    //     console.log(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expense = {
           title: enteredTitle,
           amount: enteredPrice,
           date: enteredDate,
        }
        props.onSaveExpenseData(expense)
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
         
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className="new-expense__controls">
                  <div className="new-expense__control">
                    <label>Add new Title</label>
                    <input
                      type="text"
                      value={enteredTitle}
                      onChange={titleChangeHandler}
                    />
                  </div>
                  <div className="new-expense__control">
                    <label>Add Price</label>
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={enteredPrice}
                      onChange={enteredPriceHandler}
                    />
                  </div>
                  <div className="new-expense__control">
                    <label>Add Date</label>
                    <input
                      type="date"
                      min="01.01.2019"
                      max="30.12.2022"
                      value={enteredDate} 
                      onChange={enteredDateHandler}
                    />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}
export default FormExpense;