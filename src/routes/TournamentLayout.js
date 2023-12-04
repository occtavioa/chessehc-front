import { Suspense, useEffect, useState } from "react";
import { Container, Form, Nav } from "react-bootstrap";
import { Await, Link, Outlet, useHref, useLoaderData, useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function TournamentLayout() {
    const tournament = useRouteLoaderData("tournament")
    const {id, roundNumber} = useParams()
    const [selectedRound, setSelectedRound] = useState(tournament.CurrentRound)
    const navigate = useNavigate()
    const href = useHref()

    useEffect(() => {
        if (roundNumber) {
            navigate("/tournaments/" + id + "/" + (href.split("/").find((s) => s === "pairings" || s === "standings")) + "/" + selectedRound)
        }
    }, [roundNumber, selectedRound])

    return (
        <>
                <Nav variant="tabs" defaultActiveKey={href} className="mb-1">
                <Nav.Item>
                    <Nav.Link eventKey={"/tournaments/" + id} as={Link} to={"/tournaments/" + id}>Torneo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"/tournaments/" + id + "/players"} as={Link} to={"/tournaments/" + id + "/players"}>Jugadores</Nav.Link>
                </Nav.Item>
                {
                    tournament.CurrentRound &&
                        <>
                            <Nav.Item>
                                <Nav.Link eventKey={"/tournaments/"+id+"/pairings/"+selectedRound} as={Link} to={"/tournaments/"+id+"/pairings/"+selectedRound}>Pareos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"/tournaments/"+id+"/standings/"+selectedRound} as={Link} to={"/tournaments/"+id+"/standings/"+selectedRound}>Clasificación</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Form.Select value={selectedRound} onChange={(e) => {setSelectedRound(e.target.value)}}>
                                    {
                                        [...Array(tournament.CurrentRound)].map((_, i) =>
                                            <option key={i} value={i+1}>Ronda {i+1}</option>
                                        )
                                    }
                                </Form.Select>
                            </Nav.Item>
                        </>
                }
            </Nav>
            <Outlet />
        </>
    )
}

export default TournamentLayout
