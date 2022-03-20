import React from 'react';
import logo from '../../logo.svg';
import {Link} from "react-router-dom";

const HeaderTailwind = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to={'/'} className="flex items-center text-xs font-bold inline-block mr-4 uppercase text-white" href="#">
                            <img src={logo}/> <span>Company</span>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        </button>
                    </div>

                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-gray-800"
                                    to="/login"
                                >
                                    <span>Login</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTailwind;

