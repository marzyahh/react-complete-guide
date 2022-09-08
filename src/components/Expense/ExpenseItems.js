import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const ClickHandler = () => {
        setTitle("Updated");
    }
    return (
        <div>
        <div className='expense-item'>
            <ExpenseDate date = {props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>{props.amount}</div>
            <button type='submit' onClick={ ClickHandler}>Change the title</button>
        </div>
        </div>
    )
}

export default ExpenseItem;