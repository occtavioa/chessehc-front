import { Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom"

function Pairings() {
    const {games, byes} = useLoaderData()

    console.log("game:", games);
    console.log("byes:", byes);
    
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
                            <tr key={g.Id}>
                                <td>{g.white.Id}</td>
                                <td>{g.white.Rating}</td>
                                <td>{g.white.Title ?? "-"}</td>
                                <td>{g.white.Name}</td>
                                <td>{g.WhitePoint} - {g.BlackPoint}</td>
                                <td>{g.black.Id}</td>
                                <td>{g.black.Rating}</td>
                                <td>{g.black.Title ?? "-"}</td>
                                <td>{g.black.Name}</td>
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
                                <td>{b.player.Id}</td>
                                <td>{b.player.Rating}</td>
                                <td>{b.player.Title ?? "-"}</td>
                                <td>{b.player.Name}</td>
                                <td>{b.ByePoint}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Pairings
