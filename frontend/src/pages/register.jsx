import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";
function Register()
{
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(registerschema) })
    function onSubmit(data)
    {
        console.log(data)
        alert("register success")
        navigate("/")
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> USERNAME: </label>
                <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='text' required placeholder="please enter your username" {...register("name")}/>
                <p>{errors.name?.message}</p>
                <br/><br/>
                <label> EMAIL: </label>
                <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='email' required placeholder="please enter your email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <br/><br/>
                <label> PASSWORD: </label>
                <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='password' required placeholder="please enter your password" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <br/><br/>
                <label> AGE: </label>
                <input className=" bg-fuchsia-500 border-b-cyan-900 rounded-2xl" type='number' required placeholder="please enter your age" {...register("number")}/>
                <p>{errors.age?.message}</p>
                <br/><br/>
                <button className="bg-emerald-800 rounded" type="submit" >submit</button>                
            </form>
        </>
    )
}
export default Register 