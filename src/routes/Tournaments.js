import { Suspense } from "react"
import { useEffect, useState } from "react"
import { ListGroup, Nav } from "react-bootstrap"
import { Await, Link, useLoaderData } from "react-router-dom"

function Tournaments() {
    const {tournaments} = useLoaderData()

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <Await
                    resolve={tournaments}
                    errorElement={<>Error loading tournaments</>}
                    children={(tournaments) => 
                        <ListGroup>
                            {
                                tournaments.map((tournament) => 
                                    <ListGroup.Item key={tournament._id}>
                                        <Nav.Link as={Link} to={`${tournament._id}`}>
                                            {tournament.name}
                                        </Nav.Link>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    }
                >
                </Await>
            </Suspense>
        </>
    )
}

export default Tournaments
