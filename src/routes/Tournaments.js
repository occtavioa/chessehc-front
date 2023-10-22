import { ListGroup, Nav } from "react-bootstrap"
import { Link, useLoaderData } from "react-router-dom"

function Tournaments() {
    const tournaments = useLoaderData()

    return (
        <>
            <ListGroup>
                {
                    tournaments.map((tournament) => 
                        <ListGroup.Item key={tournament.id}>
                            <Nav.Link as={Link} to={`${tournament.id}`}>
                                {tournament.name}
                            </Nav.Link>
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </>
    )
}

export default Tournaments
