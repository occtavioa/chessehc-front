import { Alert } from "react-bootstrap";
import { useLoaderData } from "react-router-dom"
import PlayersTable from "../components/PlayersTable";

function Players() {
    const players = useLoaderData()

    return (
        <>
            {
                players.length === 0
                ? <Alert variant="light">No players added</Alert>
                : <PlayersTable players={players}/>
            }
        </>
    )
}

export default Players
