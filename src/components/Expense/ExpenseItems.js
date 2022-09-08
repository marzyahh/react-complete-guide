import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // const ClickHandler = () => {
    //     setTitle("Updated");
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>{props.amount}</div>
            {/* <button type='submit' onClick={ ClickHandler}>Change the title</button> */}
        </Card>
    )
}

export default ExpenseItem;