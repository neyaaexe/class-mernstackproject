import { useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard()
{
    const location=useLocation(" ");
    const[userdata,setUserdata]=useState(" ");
    function user()
    {
        setUserdata(location.state)
        console.log(userdata)
    }
    return(
        <>
        <div className="text-emerald-600">Dashboard page</div>
        <button type="submit" className="bg-emerald-800 rounded" onClick={user}>click</button>
        </>
    )
}
export default Dashboard