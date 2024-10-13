import { useContext } from "react";
import { TbUser } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AllContext } from "../context/context";


export const Navbar = () => {
    const context = useContext(AllContext)
    return (
        <div className="h-12 border-b-2 border-border w-full bg-secondary flex justify-between items-center px-10">
            <NavLink to={"/"}><h1 className="text-2xl font-bold font-alata text-textcol">Batua</h1></NavLink>
            {context.isLoggedIn && <h1 className="text-xl text-textcol font-algerian">Hello, <strong className="cursor-pointer">{context.signedUser.name}</strong> </h1>}
            {!context.isLoggedIn && <NavLink to={"/signin"}><h1 className="text-xl text-textcol font-algerian">Sign In </h1></NavLink>}
        </div>
    )
}