import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './BudgetProject'

function AddExpenses() {
    const {remainingBudget,setRemainingBudget,spanBudget,setSpanBudget,addItem,setAddItem} = useContext(userContext);
     const[getName,setName] = useState("")
     const[cost,setCost] = useState(0);
    
    // let totalCost = 2000;
     const addData = ()=>{
        let data = {
            name :getName,
            spanCost : cost
        }
        setName('');
        setCost(0);
        setAddItem(preData=>[...preData,data]);
        
     }
    
   
  return (
    <>
    <h1 style={{textDecoration:"underline",margin:"5px 30px",textAlign:"",padding:"5px 20%",textAlign:'center',backgroundColor:"rgb(234, 103, 55)",color:"white",}}>Add Expenses</h1>
    <div style={{padding:"10px 13%",display:"flex",justifyContent:"space-around",gap:"20px"}}>
        <input value={getName} style={{padding:"10px 30px",borderRadius:"20px",textTransform:"capitalize",fontStyle:"oblique",backgroundColor:"rgb(243, 192, 174)",fontSize:"20px",fontWeight:"bold"}} type='text' placeholder='Enter the item ' onChange={(e)=>{setName(e.target.value)}}></input>
        <input value={cost}  style={{padding:"10px 30px",borderRadius:"20px",textTransform:"capitalize",fontStyle:"oblique",backgroundColor:"rgb(243, 192, 174)",fontSize:"20px",fontWeight:"bold"}}  type='number' placeholder='Enter Cost' onChange={(e)=>{setCost(e.target.value)}}></input>
        <button onClick={()=>{addData()}} style={{padding:"5px 20px",borderRadius:"10px",textAlign:"center",backgroundColor:"orangered",color:"white",fontWeight:"bolder",fontSize:"20px",cursor:"pointer"}}>Save</button>
    </div>
    </>
  )
}

export default AddExpenses
