import './ExpenseItem.css';
import React from "react";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <DateComp expenseDate={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.expenseItem}</h2>
                <div className="expense-item__price">{props.expensePrice}</div>
            </div>
        </div>
    );
}


function DateComp(props) {
    return (
        <div>{props.expenseDate.toISOString()}</div>
    )
}


export default ExpenseItem;
