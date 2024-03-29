import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo.png'
import { FaBars, FaSun, FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import profile from '../assets/img/profile.jpg'
import { MdOutlineLogout } from "react-icons/md";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add-product'}>Add Product</NavLink></li>
        <li><NavLink to={'/my-cart'}>My Cart</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(console.log('success'))
            .catch(error => console.log(error))
    }
    return (
        <div className="bg-Primary">
            <div className="navbar text-slate-300 container mx-auto" id="NavItems">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <FaBars className="text-xl"></FaBars>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-Primary rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-center hidden md:block md:navbar-start">
                        <Link to={'/'}>
                            <img className="h-10 w-auto bg-opacity-50 hover:bg-opacity-30 duration-150 rounded-md bg-slate-100" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center md:hidden md:navbar-start">
                    <Link to={'/'}>
                        <img className="h-10 w-auto bg-opacity-50 hover:bg-opacity-30 duration-150 rounded-md bg-slate-100" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal space-x-1 px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-100 bg-opacity-50 hover:bg-opacity-30 duration-200">
                        <FaSun></FaSun>
                    </div>
                    {
                        user ?
                            <Link to={'/profile'} className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-100 bg-opacity-50 hover:bg-opacity-30 duration-200 tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img className="rounded-full h-full w-full" src={user?.photoURL ? user?.photoURL : profile} alt="" />
                            </Link>
                            :
                            <Link to={'/login'} className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-100 bg-opacity-50 hover:bg-opacity-30 duration-200">
                                <FaUserAlt className=""></FaUserAlt>
                            </Link>
                    }
                    {
                        user ?
                            <div onClick={handleLogOut} className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-100 bg-opacity-50 hover:bg-opacity-30 duration-200 tooltip-bottom tooltip" data-tip={'Log Out'}>
                                <MdOutlineLogout />
                            </div> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;