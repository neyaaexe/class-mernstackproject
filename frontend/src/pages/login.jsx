import { BrowserRouter, useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    /*
    const [email, setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")
    const formSubmit =(e)=>
    {
      e.preventDefault()
      console.log(email,password)
      console.log("thambi keela erangu pa")
    }
    */
   const location=useLocation();
   const navigate = useNavigate();
   const[logindata,setLogindata]=useState({
        username:" ",
        email:" ",
        password:" "
   })
   const handleChange=(e)=>
   {
    setLogindata({...logindata,[e.target.name]:e.target.value})
   }
   const formSubmit=(e)=>
   {
    e.preventDefault()
    const registerdata = location.state
    console.log(logindata)
    console.log(registerdata)
     if (
        registerdata.name === logindata.username &&
        registerdata.email === logindata.email &&
        registerdata.password === logindata.password
    )
    {
        console.log("login successful")
        navigate("/dashboard",{
          state:logindata
        })
    }
    else
    {
      console.log("invalid username and email")
    }
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
      
    <div className="min-h-screen bg-emerald-400 flex justify-center items-center">
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <form onSubmit={formSubmit} className="bg-pink-300 rounded-2xl p-10 shadow-xl flex flex-col items-center gap-4 w-full max-w-md">
         <div className="font-serif text-3xl text-center text-emerald-800">LOGIN PAGE</div>
         <br/>
        <label htmlFor="name" className="text-black font-serif font-bold self-start">USERNAME</label>
        <input className="w-full bg-emerald-600 border-2 border-cyan-900 rounded-2xl p-3" type='text' required placeholder="please enter your username" value={logindata.username} onChange={handleChange} name="username"/>
        <label className="text-black font-serif font-bold self-start">EMAIL </label>
        <input className="w-full bg-emerald-600 border-2 border-cyan-900 rounded-2xl p-3" type='email' required placeholder="please enter your email" value={logindata.email} onChange={handleChange} name="email"/>
        <label className="text-black font-serif font-bold self-start">PASSWORD</label>
        <input className="w-full bg-emerald-600 border-2 border-cyan-900 rounded-2xl p-3" type='password' required placeholder="please enter your password" value={logindata.password} onChange={handleChange} name="password"/>
        <br/>
        <button className="text-black rounded-xl p-3 border-2 bg-green-300 hover:bg-green-400 w-full font-bold" type="submit">submit</button>
      </form>

    </div>
  </div>
    </>
    )
}
export default Login
