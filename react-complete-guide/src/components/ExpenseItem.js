import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';


function ExpenseItem(props) {    

    // Destructure array; title is the value and then setTitle is the function to change the first element
    const [titleHeader, setTitle] = useState(props.title); // must be called inside the component function

    const clickHandler = () => {
        setTitle('Upadate');
        console.log(titleHeader);
    };

    return (
        <li>
            <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{titleHeader}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            </Card>
        </li>
    );
  }
  
  export default ExpenseItem;