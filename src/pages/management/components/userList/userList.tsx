import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, Edit } from "@mui/icons-material";

import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';

const UserList = ({ datas }) => {
    const [open, setOpen] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', password: '', role: '' });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        // Add logic to save the new user
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'id', headerName: 'Id', flex: 1 },
        { field: 'role', headerName: 'Role', flex: 1 },
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
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add User
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={newUser.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="role"
                        label="Role"
                        select
                        fullWidth
                        value={newUser.role}
                        onChange={handleChange}
                    >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user">User</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default UserList;