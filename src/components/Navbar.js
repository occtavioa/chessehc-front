import { Navbar as BNavbar, Nav } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";

function Navbar() {
    return (
        <BNavbar>
            <BNavbar.Brand as={Link} to={"/"}>
                <img alt="chessehc-logo"/>
            </BNavbar.Brand>
            <Nav.Link as={Link} to={"/tournaments"}>Torneos</Nav.Link>
        </BNavbar>
    )
}

export default Navbar
