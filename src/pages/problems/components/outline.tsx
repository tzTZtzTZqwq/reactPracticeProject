import {Grid2,Typography,Stack,Paper } from "@mui/material";
import ProblemCard from "./problemCard/problemCard";
import Box from '@mui/material/Box';
import './outline.css'
function Outline(){
    return(
        <div className="problemList-recommend-root">
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12,md:8}}>
                    <Paper elevation={2} sx={{height:'100%'}}>
                        <Typography variant="h3" component="div" sx={{minWidth:'100px',padding:'20px'}}>
                            random problem
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{padding:'10px',height:'180px',overflow:'scroll'}}>
                            <ProblemCard></ProblemCard>
                            <ProblemCard></ProblemCard>
                            <ProblemCard></ProblemCard>
                        </Stack>
                    </Paper>
                </Grid2>
                <Grid2 size={{xs:12,md:4}}>
                    <Paper elevation={2} sx={{height:'100%'}}>
                        <Stack spacing={2}>
                            <Box sx={{height:'150px',borderRadius:'3px'}}></Box>
                            <Box sx={{height:'70px',borderRadius:'3px'}}>
                                <p style={{textAlign:"center"}}>namenamename</p>
                            </Box>
                            <Box sx={{height:'50px',borderRadius:'3px'}}></Box> 
                        </Stack>
                    </Paper>
                </Grid2>
            </Grid2>
        </div>
    )
}
export default Outline