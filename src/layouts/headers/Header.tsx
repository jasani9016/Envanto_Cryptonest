"use client"
import Link from "next/link";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import logo from "@/assets/img/logo/logo.svg";

const Header = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><Image src={logo} alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenu />
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-register"><Link className="btn2" href="/contact">Get Register</Link></li>
                                            </ul>
                                        </div>
                                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
        </>
    );
}

export default Header;
