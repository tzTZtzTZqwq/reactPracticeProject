import NavBar from "@/components/navBar/navBar";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Box, Tab } from "@mui/material";
import * as React from 'react'
import TasksManagement from "./components/tasksManagement";
import Usersmanagement from "./components/usersManagement";
import Groupsmanagement from "./components/groupsManagement";
function ManageMent(){
    const [selectedTab, setsSlectedTab] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setsSlectedTab(newValue);
    };
    return(
        <div>
            <NavBar/>
            <Paper sx={{margin:'15px',height:'calc(100vh - 150px)',padding:'20px',overflow:'scroll'}}>
            <TabContext value={selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                    <Tab label="tasks - 任务管理" value="1" />
                    <Tab label="users - 用户管理" value="2" />
                    <Tab label="groups - 班级管理" value="3" />
                    <Tab label="activities - 活动管理" value="4" />
                    
                </TabList>
                </Box>
                <TabPanel value="1">
                    <TasksManagement/>
                </TabPanel>
                <TabPanel value="2">
                    <Usersmanagement/>
                </TabPanel>
                <TabPanel value="3">
                    <Groupsmanagement/>
                </TabPanel>
            </TabContext>
            </Paper>
        </div>
    )
}

export default ManageMent