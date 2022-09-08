import React from 'react';
import './ExpenseDate.css';


const  ExpenseDate = (props) => {
    let temp = new Date(props.date);
    const month = temp.toLocaleString('en-US', { month: 'long' });
    const day =   temp.toLocaleString('en-US', {day: '2-digit'});
    const year =  temp.getFullYear();
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
    )
}
export default ExpenseDate; 