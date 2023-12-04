import { Navbar as BNavbar, Nav, Image } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";

function Navbar() {
    return (
        <BNavbar bg="light" className="mb-3">
            <Nav.Item>
                <BNavbar.Brand as={Link} to={"/"}>
                    <Image src={process.env.PUBLIC_URL + '/logo.png'} alt="chessehc-logo"></Image>
                </BNavbar.Brand>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to={"/tournaments"}>Tournaments</Nav.Link>
            </Nav.Item>
        </BNavbar>
    )
}

export default Navbar
