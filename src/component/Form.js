import React,{ useState } from 'react';
import Error from './Error';
import { nanoid } from 'nanoid'

const Form = ({cosa}) => {
    const [nameExpend, setNameExpend] = useState("");
    const [amountExpend, setAmountExpend] = useState("");
    const [error, setError] = useState(false);
    

    const saveName = e =>{
        setNameExpend(e.target.value)
    }
    const saveCount = e =>{
        setAmountExpend(parseInt(e.target.value))
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(nameExpend.trim()==='' || amountExpend<1 || isNaN(amountExpend)){
        setError(true)
        return;
    }
    setError(false)
   

    const expend ={
        nameExpend,
        amountExpend,
        id:nanoid()
    };

    cosa(expend)
    // reset form
    setNameExpend('')
    setAmountExpend(0)
}

return(

<form
    onSubmit={handleSubmit}
>
    {error ? <Error message="boht fileds are required" /> : null}
    <div className='campo'>  
        <label>Add name's expense</label>
        <input
        type='text'
        className='u-full-width'
        placeholder='bus'
        value={nameExpend}
        onChange={saveName}
    />
    </div> 
    <div className='campo'>  
        <label>Add cost</label>
        <input
        type='number'
        className='u-full-width'
        placeholder='100'
        value={amountExpend}
        onChange={saveCount}
    />
    <input 
      className="button-primary u-full-width" type="submit" 
      value="Add expense"
    />
    </div> 
</form>
)
} 
export default Form; 