import { Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom"

function Pairings() {
    const {games, byes} = useLoaderData()

    return (
        <>
            <Table>
                <thead>
                    <tr><th colSpan={9}>Games</th></tr>
                    <tr>
                        <th>Id</th>
                        <th>Rating</th>
                        <th>Título</th>
                        <th>Nombre</th>
                        <th>Resultado</th>
                        <th>Id</th>
                        <th>Rating</th>
                        <th>Título</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        games.map(g =>
                            <tr key={g.id}>
                                <td>{g.white.id}</td>
                                <td>{g.white.rating}</td>
                                <td>{g.white.title}</td>
                                <td>{g.white.name}</td>
                                <td>{g.whitePoint} - {g.blackPoint}</td>
                                <td>{g.black.id}</td>
                                <td>{g.black.rating}</td>
                                <td>{g.black.title}</td>
                                <td>{g.black.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr><th colSpan={5}>Byes</th></tr>
                    <tr>
                        <th>Id</th>
                        <th>Rating</th>
                        <th>Título</th>
                        <th>Nombre</th>
                        <th>Punto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        byes.map((b, i) =>
                            <tr key={i}>
                                <td>{b.player.id}</td>
                                <td>{b.player.rating}</td>
                                <td>{b.player.title}</td>
                                <td>{b.player.name}</td>
                                <td>{b.byePoint}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Pairings
