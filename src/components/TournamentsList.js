import { Alert, Badge, Button, ListGroup, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function TournamentsList({tournaments}) {
    return (
        <ListGroup as={"ol"} className="">
            {
                tournaments.map((tournament) => 
                    <ListGroup.Item key={tournament.Id}>
                        {tournament.Name}
                        {
                            tournament.CurrentRound === null
                            ? <Badge bg="danger">Not started - 0 / {tournament.NumberOfRounds}</Badge>
                            : tournament.CurrentRound < tournament.NumberOfRounds
                                ? <Badge bg="warning">Ongoing - {tournament.CurrentRound} / {tournament.NumberOfRounds}</Badge>
                                : <Badge bg="success">Finished - {tournament.NumberOfRounds} / {tournament.NumberOfRounds}</Badge>
                        }
                        <Button>
                            <i className="bi bi-arrow-right-circle-fill"></i>
                            <Nav.Link as={Link} to={`/tournaments/${tournament.Id}`}>
                                See tournament
                            </Nav.Link>
                        </Button>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default TournamentsList
