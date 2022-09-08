import React, {useState} from 'react';
import ExpenseItem from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expences.css'

const  Expenses = (props) => {
    const [filterYear, setSelectedYear] = useState('2020');
    const filterChangedHandler = slectedYear => {
      setSelectedYear(slectedYear)
    }
  return (  
      <Card className='expenses'>
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
        </Card>   
  )
}
export default Expenses;