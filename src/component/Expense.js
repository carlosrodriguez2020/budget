import React from "react";

const Expense = ({expense}) => {
return(
    <li className="gastos">
        {expense.nameExpend}
        <br/>
        <span className="gastos">$ {expense.amountExpend}</span>
    </li>
)    

}

export default Expense;