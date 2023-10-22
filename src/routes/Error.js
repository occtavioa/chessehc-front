import { Alert } from "react-bootstrap";
import Navbar from "../components/Navbar";

function Error() {
    return (
        <>
            <Navbar />
            <Alert variant="danger">Hubo un error</Alert>
        </>
    )
}

export default Error
