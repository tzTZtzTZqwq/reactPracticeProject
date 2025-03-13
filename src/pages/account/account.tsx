import { Box, Tabs, Tab, Typography, Paper, Input, Grid2, TextField, Button } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from "@/components/navBar/navBar";
import * as React from 'react';

import Login from "./components/login";
import Register from "./components/register";

function Account(){
    const [selectedTab, setsSlectedTab] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setsSlectedTab(newValue);
    };
    return(
        <div style={{alignContent:'center',backgroundColor:'#f4f4f4'}}>
            <NavBar/>
            <Paper sx={{ width: '500px',height:'670px',marginTop:'70px',marginBottom:'70px',marginLeft:'auto',marginRight:'auto',padding:'20px'}}>
            <TabContext value={selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                    <Tab label="登录" value="1" />
                    <Tab label="注册" value="2" />
                    <Tab label="找回密码" value="3" />
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