import { Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getProblemList } from '@/apis/problem';
import { useEffect, useState } from 'react';
import { Link } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WidthFull } from '@mui/icons-material';

function ProblemList() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function fetchProblems() {
            const response = await getProblemList();
            if (response.status === "0") {
                setProblems(response.problems);
            }
        }
        fetchProblems();
    }, []);

    const columns = [
        { field: 'problem_index', headerName: 'ID', flex: 1  },
        { field: 'title', headerName: 'NAME', flex: 1  },
        { field: 'tags', headerName: 'TAGS', flex: 1 },
        {
            field: 'action',
            headerName: '',
            renderCell: (params) => (
                <Link to={'/attempt/' + params.row.problem_index}>
                    <Button sx={{ height: '40px'}}>
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            )
        }
    ];

    return (
        <div className="problems-problemList-root" style={{ height: 400, padding: '15px' }}>
            <Paper sx={{ width: '100%', display: 'flex' }}>
                <DataGrid
                    rows={problems}
                    columns={columns}
                    getRowId={(row) => row.problem_index}
                />
            </Paper>
        </div>
    );
}

export default ProblemList;
