import React,{useState} from 'react';

const AskBudget = () => {

  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false)


  const defineBudget = e =>{
    setAmount(parseInt(e.target.value))

  }

const addBudget = e => {
  e.preventDefault()
  if(amount<0 || !isNaN(amount)){
    setError(true)
    return;

  }
  setError(false);
}


return(
<>
  <h2>Enter Budget</h2>
    {error? 'this is not a valid budget' : null}

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