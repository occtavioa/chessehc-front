import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <Navbar bg="light" className="fixed-bottom">
            <Row>
                <Col sm={12}>
                    Contact 47292048@est.ort.edu.ar
                </Col>
                <hr></hr>
                <Col sm={12}>
                    ChessehC - 2023
                </Col>
            </Row>
        </Navbar>
    )
}

export default Footer
