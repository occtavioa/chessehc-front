import { useLoaderData } from "react-router-dom"
import TournamentsList from "../components/TournamentsList"

function Tournaments() {
    const tournaments = useLoaderData()

    return (
        <>
            <TournamentsList tournaments={tournaments} />
        </>
    )
}

export default Tournaments
