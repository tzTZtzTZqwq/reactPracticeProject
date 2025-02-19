import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, Edit } from "@mui/icons-material";

const GroupList = ({ datas }) => {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'id', headerName: 'Id', flex: 1 },
        { field: 'population', headerName: 'Population', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            getActions: (params) => [
                <GridActionsCellItem icon={<Edit />} label="Edit" />,
                <GridActionsCellItem icon={<Delete />} label="Delete" />,
            ],
        },
    ];

    const rows = datas.map((data, index) => ({
        id: index,
        ...data,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    );
};

export default GroupList;