import { Table } from "react-bootstrap"

function PlayersTable({players}) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Rating</th>
                    <th>Título</th>
                    <th>Nombre</th>
                    <th>Puntos</th>
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
                            <td>{player.points}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default PlayersTable
