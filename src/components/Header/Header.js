import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/offer'>Offer</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Authentication/Authorization</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/offer'>Offer</Link></li>
                    <li>{user?.uid && <p>{user.email}</p>}</li>


                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <Link onClick={handleSignOut} className="btn">Sign Out</Link>
                        :
                        <>
                            <Link to='/login' className="btn mr-2">Login</Link>
                            <Link to='/registration' className="btn">Register</Link>
                        </>
                }
            </div>

        </div>
    );
};

export default Header;