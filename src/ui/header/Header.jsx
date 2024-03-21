/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaBars, FaHeartbeat, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DarkModeToggle from "../themes/DarkModeToggle";
import Logo from "./Logo";
import {
    TbAlignLeft,
    TbHome2,
    TbMenu2,
    TbSearch,
    TbShoppingCart,
    TbUser,
} from "react-icons/tb";

function Header() {
    const [navbar, setNavbar] = useState(false);
    const [bar, setbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
        });
    }, []);

    return (
        <>
            <header className={`header ${navbar && "active"}`} data-header>
                <div className="container">
                    {bar ? (
                        <TbMenu2
                            className="bar-toggle-btn"
                            onClick={() => {
                                setbar(!bar);
                            }}
                        />
                    ) : (
                        <TbAlignLeft
                            className="fa-times bar-toggle-btn"
                            onClick={() => {
                                setbar(!bar);
                            }}
                        />
                    )}

                    <Logo />

                    {/* <button className="menu-toggle-btn" data-nav-toggle-btn>
                        <TbMenu2 />
                    </button> */}

                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li>
                                <NavLink to="/aboutus" className="navbar-link">
                                    Products
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/services" className="navbar-link">
                                    Best Seller
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/services" className="navbar-link">
                                    New Arrival
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/services" className="navbar-link">
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contactus"
                                    className="navbar-link"
                                >
                                    contact us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <ul className="icons-shop">
                        <li>
                            <NavLink to="/home" className="">
                                <TbSearch />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home" className="">
                                <TbShoppingCart />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home" className="">
                                <TbUser />
                            </NavLink>
                        </li>
                    </ul>

                    {/* {navbar ? (
                        <FaTimes
                            className="fa-times menu-toggle-btn"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            className="menu-toggle-btn"
                            id="menu-btn "
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )} */}
                </div>
            </header>

            {/* 
            icon home
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M10 12h4v4h-4z" />
</svg>
            */}

            {/* <header className="header">
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
                        <ul>
                            <li>
                                <NavLink to="/home">home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/book">book</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blogs">blogs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus">aboutUs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">login</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {navbar ? (
                        <FaTimes
                            className="fa-times"
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            id="menu-btn"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}
 
                </div>
            </header> */}
        </>
    );
}

export default Header;
