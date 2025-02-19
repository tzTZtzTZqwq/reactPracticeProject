import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

function CompactList({titles,datas}){
    return(
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(titles).map((key) => (
                            <TableCell key={key}>
                                {Array.isArray(titles[key]) ? titles[key].join(', ') : titles[key]}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.keys(data).map((key) => (
                                <TableCell key={key}>
                                    {Array.isArray(data[key]) ? data[key].join(', ') : data[key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}

export default CompactList