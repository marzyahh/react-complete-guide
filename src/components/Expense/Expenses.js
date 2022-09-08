import React, {useState} from 'react';
import ExpenseItem from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';

const  Expenses = (props) => {
    const [filterYear, setSelectedYear] = useState('2020');
    const filterChangedHandler = slectedYear => {
      setSelectedYear(slectedYear)
    }
  return (  
    <div>
        <ExpenseFilter
         selected={filterYear}
         onChangeFilter={filterChangedHandler}
        />
        {props.items.map((item) =>(
          <ExpenseItem
           title={item.title}
           amount={item.amount}
           date={item.date}
          />
        ))}
    </div>
   
  )
}
export default Expenses;