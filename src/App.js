import { useState } from 'react';
import './App.css';

function App() {
  
   
  let [name,setName]=useState({
    love:'',
    partner:''
  })
 
  
  
  
let change=(e)=>{
   let name=e.target.name
   let value=e.target.value

   setName((preVal)=>{
     if (name==='love'){
        return{
          love:value,
          partner:preVal.partner
        }}
     else if(name==='partner'){return{
       love:preVal.love,
       partner:value
     }}})}

  let submit= async(e)=>{
    let {love,partner}=name
   e.preventDefault()
   
  

   let res=await fetch('https://love-data-672a1-default-rtdb.firebaseio.com/datalove.json',
         {method:"POST",
        headers:{"Content-type":"application/json"},
         body:JSON.stringify({love,partner})
        })
        alert('Your name and your lover name has been sent to Aryan')
       setName('')
      }
 async function click(e){
  let {love,partner}=name
   if(e.key==='13'){
     

   let res=await fetch('https://love-data-672a1-default-rtdb.firebaseio.com/datalove.json',
         {method:"POST",
        headers:{"Content-type":"application/json"},
         body:JSON.stringify({love,partner})
        })
        alert('Your name and your lover name has been sent to Aryan')
   } 
  }    
          
          
  return (
    <>
    <div className="App">
      <h2 id='h'>Find ❣️ % Between</h2>
      <form  method="POST" onSubmit={submit}>
      <div className="cont">
        <div className="list">
      <h4>YOUR NAME </h4>
      <input type="text" onKeyUp={click} required autoComplete='off'  name='love' className='inp' onChange={change}  placeholder=' Enter Your Name'/>
      </div>
      <div className="list">
      <h4>PARTNER'S NAME</h4>
      <input type="text" onKeyUp={click} required name='partner' autoComplete='off' className='inp' onChange={change} placeholder=" Enter Partner's Name" />
      </div>
      </div>
      <div className="butn">
    <button type='submit' className='btn' > Calculate 💓 % </button>
    </div>
    </form>
  </div>
    <div className="fot" >
   <h6>*We value customer privacy</h6> 
  </div>
  </>
  );
}

export default App
