import React from 'react';
import {reviewBudget} from '../Helper'

const ControlBudget = ({budget, rest}) => {
    return(
        <>
            <div className='alert alert-primary'>
                Budget: $ {budget}
            </div>
            <div className={reviewBudget(budget,rest)}>
                Rest: $ {rest}
            </div>
        </>
    )
}
export default ControlBudget;