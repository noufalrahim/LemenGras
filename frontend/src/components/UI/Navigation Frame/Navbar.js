import "./NavBar.css"
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <>
            <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo">LEMEN GRAS</label>
            <ul className="ul">
                <li className="li"><Link className="link-1 cart-link" to="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">BAG</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;