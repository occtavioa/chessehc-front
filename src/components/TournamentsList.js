import { ListGroup, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function TournamentsList({tournaments}) {
    return (
        <ListGroup>
            {
                tournaments.map((tournament) => 
                    <ListGroup.Item key={tournament.Id}>
                        <Nav.Link as={Link} to={`${tournament.Id}`}>
                            {tournament.Name}
                        </Nav.Link>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default TournamentsList
