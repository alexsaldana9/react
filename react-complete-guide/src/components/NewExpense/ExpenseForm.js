import React, { useState } from 'react';
import './ExpenseForm.css'


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    // Use this for the previous state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // Use this function if your state update depends on the previous state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    
    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        // onSaveExpenseData is passed from the child "Expense Form" to the parent NewExpense
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expnse__controls">
                <div className="new-expnse__control">
                    <label>Title: </label>
                    <input 
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} 
                     />
                </div>
                <div className="new-expnse__control">
                    <label>Amount: </label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expnse__control">
                    <label>Date: </label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={dateChangeHandler} 
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;