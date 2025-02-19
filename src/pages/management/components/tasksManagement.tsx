import CompactProblemList from "./userList/problemList";
import NewProgrammingTask from "./newTask/newProgrammingTask";
import { Button, Container, Paper, Dialog } from "@mui/material";
import * as React from 'react';

const TABS = {
    none: 0,
    addProgrammingAssignment: 1,
    addCollectingAssignment: 2,
    stats: 3
};

function TasksManagement() {
    const [selectedTab, setSelectedTab] = React.useState(TABS.none);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedTab(TABS.none);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                + new programming Assignment - 编程任务
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="lg">
                {openDialog && <NewProgrammingTask />}
            </Dialog>
            <CompactProblemList datas={[
                { id: "P1001", name: "Task 1", tags: [101],submissionRate: 100 },
                { id: "P1001", name: "Task 2", tags: [102],submissionRate: 100 },
                { id: "P1001", name: "Task 3", tags: [103],submissionRate: 100 }
            ]} />
        </div>
    );
}

export default TasksManagement;