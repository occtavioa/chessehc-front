import { ListGroup, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function TournamentsList({tournaments}) {
    return (
        <ListGroup>
            {
                tournaments.map((tournament) => 
                    <ListGroup.Item key={tournament._id}>
                        <Nav.Link as={Link} to={`${tournament._id}`}>
                            {tournament.name}
                        </Nav.Link>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default TournamentsList
