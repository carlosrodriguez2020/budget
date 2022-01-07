import React from 'react';
import Expense from './Expense'

const List = ({expenses}) => {

return(
    <div className='gastos-realizados'>
        <h2>List of expenses</h2>
        {expenses.map(expense=>(
        <Expense 
        expense={expense}
        key={expense.id}
        />
        ))}
    </div>
)


}

export default List;