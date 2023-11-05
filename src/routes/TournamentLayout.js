import { useEffect, useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { Link, Outlet, useHref, useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function TournamentLayout() {
    const tournament = useRouteLoaderData("tournament")
    const {id, roundNumber} = useParams()
    const [selectedRound, setSelectedRound] = useState(tournament.currentRound)
    const navigate = useNavigate()
    const href = useHref()

    useEffect(() => {
        if(roundNumber) {
            navigate("/tournaments/"+id+"/"+selectedRound+"/"+(href.split("/").find((s) => s === "pairings" || s === "standings")))
        }
    }, [id, roundNumber, selectedRound, href])

    return (
        <>
            <Nav variant="tabs" defaultActiveKey={href}>
                <Nav.Item>
                    <Nav.Link eventKey={"/tournaments/"+id+""} as={Link} to={"/tournaments/"+id+""}>Torneo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"/tournaments/"+id+"/players"} as={Link} to={"/tournaments/"+id+"/players"}>Jugadores</Nav.Link>
                </Nav.Item>
                {
                    tournament.currentRound &&
                        <>
                            <Nav.Item>
                                <Nav.Link eventKey={"/tournaments/"+id+"/"+selectedRound+"/pairings"} as={Link} to={"/tournaments/"+id+"/"+selectedRound+"/pairings"}>Pareos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"/tournaments/"+id+"/"+selectedRound+"/standings"} as={Link} to={"/tournaments/"+id+"/"+selectedRound+"/standings"}>Clasificación</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Form.Select value={selectedRound} onChange={(e) => {setSelectedRound(e.target.value)}}>
                                    {
                                        [...Array(tournament.currentRound)].map((_, i) =>
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
