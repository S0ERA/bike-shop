import {Link} from "react-router";

export function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/catalog"><span>Каталог</span></Link>
            <Link to="/cart"><span>Корзина</span></Link>
        </nav>
    )
}