import React, { useContext, useEffect, useState } from 'react'
import '../component/expensesStyle.css'
import { userContext } from './BudgetProject'

function Expenses() {
    const {remainingBudget,setRemainingBudget,spanBudget,setSpanBudget,addItem,setAddItem} = useContext(userContext)
    //  const[dataShow,setDataShow] = useState("Data will appear here !!!!")
    useEffect(()=>{
     let spanvalue = parseInt(0);
     let rem = parseInt(2000);
     addItem.map((item,index)=>{
        spanvalue = parseInt(spanvalue) + parseInt(item.spanCost)
     })
     setSpanBudget(spanvalue);
        //   setDataShow("");
     addItem.map((item,index)=>{
        rem = parseInt(rem) - parseInt(item.spanCost)
     })
    //  if(remainingBudget < 0) alert("overBudget")
     setRemainingBudget(rem)

    },[addItem])

    const deleteItem =(index_id)=>{
     let remItem = addItem.filter((item,index)=>{
         return (index !== index_id);
      })
      setAddItem(remItem);
    }
  return (
    <>
    <h1  style={{textDecoration:"underline",margin:"5px 30px",textAlign:"",padding:"5px 20%",textAlign:'center',backgroundColor:"rgb(234, 103, 55)",color:"white",}}>Expenses</h1>
    {/* <div style={{padding:"10px 13%"}}><h3>{dataShow}</h3></div> */}

    {
        addItem.map((item,index)=>{
            return   <div style={{padding:"10px 13%",display:"flex",flexDirection:"column",gap:"20px"}} key={index}>
            <div className='expenses-div'>
                <div>{item.name}</div>
                <div>{item.spanCost}</div>
                <button onClick={()=>{deleteItem(index)}} style={{padding:"5px 20px",borderRadius:"10px",textAlign:"center",backgroundColor:"orangered",color:"white",fontSize:"20px",cursor:"pointer"}}>Delete</button>
            </div>
          
        </div>
        })
    }
   
    </>
  )
}

export default Expenses
