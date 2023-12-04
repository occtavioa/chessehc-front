import { Alert, Badge, Button, Col, ListGroup, Nav, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function TournamentsList({tournaments}) {
    return (
        <ListGroup as={"ol"} className="">
            {
                tournaments.map((tournament) => 
                    <ListGroup.Item key={tournament.Id}>
                        <Row className="justify-items-center">
                            <Col>
                                {tournament.Name}
                            </Col>
                            <Col>
                                {
                                    tournament.CurrentRound === null
                                    ? <Badge bg="danger">Not started - 0 / {tournament.NumberOfRounds}</Badge>
                                    : tournament.CurrentRound < tournament.NumberOfRounds
                                        ? <Badge bg="warning">Ongoing - {tournament.CurrentRound} / {tournament.NumberOfRounds}</Badge>
                                        : <Badge bg="success">Finished - {tournament.NumberOfRounds} / {tournament.NumberOfRounds}</Badge>
                                }
                            </Col>
                            <Col>
                                <Button as={Link} to={`/tournaments/${tournament.Id}`}>
                                    See tournament
                                    <i className="bi bi-arrow-right-circle-fill"></i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default TournamentsList
