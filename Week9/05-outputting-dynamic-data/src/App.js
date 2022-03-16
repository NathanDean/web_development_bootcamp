import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseDate = new Date(2022,3,3);
  const expenseItem = "Car Insurance"
  const expensePrice = "£294.67"

  return (
    <div>
      <h2>Let's get started!</h2>
        <ExpenseItem expenseDate={expenseDate} expenseItem = {expenseItem} expensePrice = {expensePrice}/>
        <ExpenseItem expenseDate={expenseDate} expenseItem = {expenseItem} expensePrice = {expensePrice}/>
        <ExpenseItem expenseDate={expenseDate} expenseItem = {expenseItem} expensePrice = {expensePrice} />
        <ExpenseItem expenseDate={expenseDate} expenseItem = {expenseItem} expensePrice = {expensePrice}/>
    </div>
  );
}

export default App;
