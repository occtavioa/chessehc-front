import { Alert, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ErrorRoute() {
    return (
        <>
            <Navbar />
            <Container>
                <Alert variant="danger">Hubo un error</Alert>
            </Container>
            <Footer/>
        </>
    )
}

export default ErrorRoute
