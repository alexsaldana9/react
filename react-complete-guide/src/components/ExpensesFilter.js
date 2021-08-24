import React from 'react';

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);

        console.log("Year>>>> ", event.target.value);
    }

    return (
        <div className="expensesFilter__section">
            <label className="expensesFilter__label">Filter by year</label>
            <select value={props.selected} onChange={dropdownChangeHandler} className="expensesFilter__dropdown">
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )

};

export default ExpensesFilter;