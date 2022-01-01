import React,{useState} from 'react'
import './AddNewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const AddNewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='new-expense'>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
  };
  
export default AddNewExpense;