import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
function Login()
{
    const [email, setEmail] = useState('')
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
      
      <form onSubmit={formSubmit}>
      <input type='email' className="bg-fuchsia-600 border-4  border-emerald-500" required placeholder="enter your email" input={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/><br/>
      <input type='password' className="bg-fuchsia-600 border-4 border-emerald-500" required placeholder="enter your password" input={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/><br/>
      <button className="bg-emerald-500 border-8 border-fuchsia-500" >submit</button>
      <br/><br/>
      </form>
    </>
    )
}
export default Login
