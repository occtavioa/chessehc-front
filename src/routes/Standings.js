import { useLoaderData } from "react-router-dom"
import PlayersTable from "../components/PlayersTable";

function Standings() {
    const standings = useLoaderData()

    return (
        <>
            <PlayersTable players={standings}/>
        </>
    )
}

export default Standings
