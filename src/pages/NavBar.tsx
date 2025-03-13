import {Link} from "react-router";

export function NavBar() {
    return (
        <nav className="navbar">
            <Link className="linkNav" to="/catalog">
                <span>Каталог</span>
            </Link>
            <Link className="linkNav" to="/cart">
                <span>Корзина</span>
            </Link>
        </nav>
    )
}