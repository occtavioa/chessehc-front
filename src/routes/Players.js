import { Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom"

function Players() {
    const players = useLoaderData()

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Rating</th>
                        <th>Título</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player) => 
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.rating}</td>
                                <td>{player.title ?? "-"}</td>
                                <td>{player.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Players
