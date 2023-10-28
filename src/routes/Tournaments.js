import { Suspense } from "react"
import { useEffect, useState } from "react"
import { ListGroup, Nav } from "react-bootstrap"
import { Await, Link, useLoaderData } from "react-router-dom"
import TournamentsList from "../components/TournamentsList"

function Tournaments() {
    const {tournaments} = useLoaderData()

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <Await 
                    resolve={tournaments}
                    errorElement={<>Error loading tournaments</>}
                    children={(tournaments) =>
                        <TournamentsList tournaments={tournaments} />
                    }
                />
            </Suspense>
        </>
    )
}

export default Tournaments
