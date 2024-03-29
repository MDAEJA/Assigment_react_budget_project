import React, { createContext, useState } from 'react'
import '../component/budgetProjectStyle.css'
import Expenses from './Expenses'
import AddExpenses from './AddExpenses'

export const userContext = createContext();
function BudgetProject() {
    const[remainingBudget,setRemainingBudget] = useState(0);
    const[spanBudget,setSpanBudget] = useState(0);
    const[addItem,setAddItem] = useState([]);
  return (
    <>
    <h1 style={{textDecoration:"underline",margin:"5px 30px",textAlign:"",padding:"5px 20%",textAlign:'center',backgroundColor:"rgb(234, 103, 55)",color:"white"}}>My Budget Planner</h1>
    <div style={{padding:"10px 10%"}}>
    <div className='main-div'>
        <div className='budget-div'>
            <h3>Budget : Rs 2000 </h3>
           
        </div>
        <div className='budget-div'><h3>Remaining : Rs {remainingBudget}</h3></div>
        <div className='budget-div'><h3>Span so far : Rs {spanBudget} </h3></div>
    </div>
     <userContext.Provider value={{remainingBudget,setRemainingBudget,spanBudget,setSpanBudget,addItem,setAddItem}}>
     <Expenses ></Expenses>
    <AddExpenses></AddExpenses>
     </userContext.Provider>
    

    </div>
    </>
  )
}

export default BudgetProject;
// export userContext;
