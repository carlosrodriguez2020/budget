import React,{useState} from 'react';
import Error from '../component/Error'

const AskBudget = ({setBudget, setRest, setShowComponent}) => {

  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  
  const defineBudget = e =>{
    setAmount(parseInt(e.target.value, 10))
  }
  const addBudget = e => {
    e.preventDefault()
    if(amount<1 || isNaN(amount)){
    setError(true)
    return;
    }
    setError(false);
    setBudget(amount);
    setRest(amount)
    setShowComponent(false)
  }


return(
<>
  <h2>Enter Budget</h2>
    {error? <Error
    message= 'incorrect budget'
    /> : null}
  <form
    onSubmit={addBudget}
    >
    <input
      type='number'
      className='u-full-width'
      placeholder='enter your budget'
      onChange={defineBudget}
    />
    <input 
      className="button-primary u-full-width" type="submit" 
      value="Define budget"
    />
  </form>
</>
)
}

export default AskBudget;