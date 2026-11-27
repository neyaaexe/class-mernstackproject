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
        navigate("/",{
            state:data
        })
    }
    return(
        <>
            <div className="min-h-screen bg-emerald-400">
            <br/>
            
            <br/>
            <div className=" bg-pink-300 flex justify-center place-self-center border-2 border-b-emerald-900 rounded-2xl p-2 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-3xl text-emerald-800 font-serif text-center">REGISTER PAGE</div>
                <br/>
                <label className="text-black font-serif font-bold">USERNAME: </label>
                <input className=" bg-emerald-600 border-b-cyan-900 rounded-2xl" type='text' required placeholder="please enter your username" {...register("name")}/>
                <p>{errors.name?.message}</p>
                <br/><br/>
                <label  className="text-black  font-serif font-bold">EMAIL: </label>
                <input className=" bg-emerald-600 border-b-cyan-900 rounded-2xl" type='email' required placeholder="please enter your email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <br/><br/>
                <label className="text-black  font-serif font-bold">PASSWORD: </label>
                <input className=" bg-emerald-600 border-b-cyan-900 rounded-2xl" type='password' required placeholder="please enter your password" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <br/><br/>
                <label  className="text-black font-serif font-bold">AGE: </label>
                <input className=" bg-emerald-600 border-b-cyan-900 rounded-2xl" type='number' required placeholder="please enter your age" {...register("age")}/>
                <p>{errors.age?.message}</p>
                <br/><br/>
                <button className="bg-green-200 border-2 rounded font-serif p-1.5" type="submit"  >submit</button>                
            </form>
            </div>
            </div>
        </>
    )
}
export default Register 