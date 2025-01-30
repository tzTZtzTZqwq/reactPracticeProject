import { Box, Tabs, Tab, Typography, Paper, Input, Grid2, TextField, Button } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from "@/components/navBar/navBar";
import * as React from 'react';

import Login from "./components/login";
import Register from "./components/reginster";

function Account(){
    const [selectedTab, setsSlectedTab] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setsSlectedTab(newValue);
    };
    return(
        <div style={{alignContent:'center'}}>
            <NavBar/>
            <Paper sx={{ width: '500px',height:'60vh',margin:'auto',marginTop:'70px',padding:'20px'}}>
            <TabContext value={selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                    <Tab label="Log In" value="1" />
                    <Tab label="Register" value="2" />
                    <Tab label="Forgot Password" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Login/>
                </TabPanel>
                <TabPanel value="2">
                    <Register/>
                </TabPanel>
                <TabPanel value="3">

                </TabPanel>
            </TabContext>
            </Paper>
        </div>
    )
}

export default Account