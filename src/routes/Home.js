import { Alert, Container, ListGroup } from "react-bootstrap"
import { Link, useLoaderData } from "react-router-dom"
import TournamentsList from "../components/TournamentsList"

function Home() {
    const tournaments = useLoaderData()

    return (
        <>
            {
                tournaments.length === 0
                ? <Alert variant="light">No tournaments found</Alert>
                : <>
                    <Alert variant="info">Most recent tournaments. <Alert.Link as={Link} to="/tournaments">See all</Alert.Link></Alert>
                    <TournamentsList tournaments={tournaments}/>
                </>
            }
        </>
    )
}

export default Home
