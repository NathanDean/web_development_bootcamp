function ExpenseItemNew(props) {
    return (
        <div className="expense-item">
            <div>{props.expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expenseItem}</h2>
                <div className="expense-item__price">{props.expensePrice}</div>
            </div>
        </div>
    );
}


export default ExpenseItemNew;
