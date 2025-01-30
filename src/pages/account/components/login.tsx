import { Button, Grid2, TextField } from "@mui/material"
import * as React from 'react'

function Login(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <div>
            <Grid2 container sx={{width:"100%"}}>
                <Grid2 size={4}>
                    <p>username:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField 
                        //error
                        variant="standard" 
                        sx={{width:"100%"}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={4}>
                    <p>password:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField 
                        variant="standard" 
                        sx={{width:"100%"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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

export default Login