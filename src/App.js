import React,{useState, useEffect } from 'react';
import AskBudget from './component/AskBudget';
import ControlBudget from './component/ControlBudget';
import Form from './component/Form';
import List from './component/List';


function App() {

  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showComponent, setShowComponent]= useState(true);
  const [expenses, setExpense] = useState([]);
  // const [expend, setExpend] = useState({})
  
  
  const cosa =  expend =>{
    setExpense([
      ...expenses,
      expend
    ])
  }
  
  useEffect(()=>{

  },[ ]);

 



  
  return (
  <>
    <h1>Estimated Budget</h1>
    <section className="contenido contenido-principal">
      {showComponent ? 
      (        
          <AskBudget 
          setBudget = {setBudget}
          setRest = {setRest}
          setShowComponent={setShowComponent}
          />
      )
      :
      (
      <div className='row'>
        <div className='one-half column'>
          <h2>Add Expenses</h2>
          <Form 
            cosa={cosa}
            />  
        </div>
        <div className='one-half column'>
          <List 
            expenses={expenses}
          />
          <ControlBudget 
            budget={budget}
            rest={rest}
          />
        </div>
    </div>
      )
    }
    </section>
</>
    
  );
}export default App;
