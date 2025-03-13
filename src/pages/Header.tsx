import logo from "../assets/react.svg";
import {NavBar} from "./NavBar";
import {Outlet} from "react-router";

export function Header() {
    return (
        <>
        <header className="headerWrapper">
            <img src={logo} alt="logo" className="logo" />
            <NavBar />
        </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}