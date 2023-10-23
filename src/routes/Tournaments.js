import { useEffect, useState } from "react"
import { ListGroup, Nav } from "react-bootstrap"
import { Link, useLoaderData } from "react-router-dom"

function Tournaments() {
    const [tournaments, setTournaments] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/tournaments/")
            .then((res) => res.json())
            .then((res) => {setTournaments(res)})
            .catch((e) => {console.error(e);})
    }, [])
    
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
