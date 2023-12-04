import { Table } from "react-bootstrap";
import { useRouteLoaderData } from "react-router-dom"

function Tournament() {
    const tournament = useRouteLoaderData("tournament");

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Número de rondas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {tournament.Name}
                        </td>
                        <td>
                            {tournament.NumberOfRounds}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Tournament
