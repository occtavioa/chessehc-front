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
                        <tr key={player.Id}>
                            <td>{player.Id}</td>
                            <td>{player.Rating}</td>
                            <td>{player.Title ?? "-"}</td>
                            <td>{player.Name}</td>
                            <td>{player.Points}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default PlayersTable
