import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Layout() {
    return (
        <>
            <Navbar/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )
}

export default Layout
