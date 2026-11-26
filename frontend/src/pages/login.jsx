import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
function Login()
{
    const [email, setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")
    const formSubmit =(e)=>
    {
      e.preventDefault()
      console.log(email,password)
      console.log("thambi keela erangu pa")
    }
    return(

     <>
     {/*
      <div className='text-emerald-600'>HELLO</div>
      <br/><br/>
      <input type='email' placeholder="enter your email" input={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/><br/>
      <input type='password' placeholder="enter your password" input={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/><br/>
      <button className="bg-emerald-800" onClick={()=>console.log(email,password)}>submit</button>
      <br/><br/>
      <button className="bg-emerald-800" onClick={()=>print()}>submit2</button>
      */}
    
   
      <div className="font-serif text-purple-500">LOGIN PAGE</div>
      <br/>
      <form onSubmit={formSubmit}>
        <label> EMAIL: </label>
       <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='email' required placeholder="please enter your email" value={email} onChnage={(e)=>{setEmail(e.target.value)}}/>
       <br/><br/>
       <label> PASSWORD: </label>
       <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='password' required placeholder="please enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       <br/><br/>
       <button className="bg-emerald-800 rounded" type="submit">submit</button>
      </form>
     
    </>
    )
}
export default Login
