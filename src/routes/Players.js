import { useLoaderData } from "react-router-dom"
import PlayersTable from "../components/PlayersTable";

function Players() {
    const players = useLoaderData()

    return (
        <>
            <PlayersTable players={players}/>
        </>
    )
}

export default Players
