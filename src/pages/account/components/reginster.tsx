import { Button, Grid2, TextField } from "@mui/material"

function Register(){
    return(
        <div>
            <Grid2 container sx={{width:"100%"}}>
                <Grid2 size={4}>
                    <p>username:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField variant="standard" sx={{width:"100%"}}/>
                </Grid2>
                <Grid2 size={4}>
                    <p>password:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField variant="standard" sx={{width:"100%"}}/>
                </Grid2>
                <Grid2 size={4}>
                    <p>email:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField variant="standard" sx={{width:"100%"}}/>
                </Grid2>
                <Grid2 size={4}>
                    <p>invitation code:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField variant="standard" sx={{width:"100%"}}/>
                </Grid2>
                <Grid2 size={12}>
                    <div style={{height:"50px"}}/>
                </Grid2>
                <Grid2 size={6}/>
                <Grid2 size={6}>
                    <Button variant="contained" sx={{width:"100%"}}>confirm</Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Register