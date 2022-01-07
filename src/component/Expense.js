import React from "react";

const Expense = ({expense}) => {
return(
    <li className="gasto">
        {expense.nameExpend}
        <br/>
        <span className="gasto">{expense.amountExpend}</span>
    </li>
)    

}

export default Expense;