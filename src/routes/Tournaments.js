import { Alert, Button, Container } from "react-bootstrap"
import { useLoaderData } from "react-router-dom"
import TournamentsList from "../components/TournamentsList"

function Tournaments() {
    const tournaments = useLoaderData()

    console.log("tournaments:", tournaments);
    
    return (
        <Container>
            {
                tournaments.length === 0
                ? <Alert variant="light">No tournaments found</Alert>
                : <>
                    <TournamentsList tournaments={tournaments}/>
                </>
            }
        </Container>
    )
}

export default Tournaments
