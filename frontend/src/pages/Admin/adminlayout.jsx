import { Link, Outlet } from "react-router-dom"

function Admin()
{
    return(
        <>
        <div className="text-emerald-900 font-extrabold font-sans">ADMIN PAGE</div>
        <nav>
            <Link to={"/admin/dashboard"}>dashboard</Link>
            <Link to={"/admin/settings"}>settings</Link>
            <Link to={"/admin/userdetails"}>userdetails</Link>

        </nav>
        <Outlet/>
        </>
    )
}
export default Admin