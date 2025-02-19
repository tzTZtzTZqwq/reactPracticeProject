import { Button, Grid2, TextField } from "@mui/material"
import { register } from "@/apis/account";
import * as React from 'react'

function Register(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [invitationCode, setInvitationCode] = React.useState("");

    const handleRegister = async () => {
        const status = await register(username, password);
        if (status === 0) {
            console.log("success")
        } else {
            console.log("failed")
        }
    }

    return(
        <div>
            <Grid2 container sx={{width:"100%"}}>
                <Grid2 size={4}>
                    <p>username:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField 
                        variant="standard" 
                        sx={{width:"100%"}}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={4}>
                    <p>email:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField 
                        variant="standard" 
                        sx={{width:"100%"}}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={4}>
                    <p>invitation code:</p>
                </Grid2>
                <Grid2 size={8}>
                    <TextField 
                        variant="standard" 
                        sx={{width:"100%"}}
                        onChange={(e) => setInvitationCode(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <div style={{height:"50px"}}/>
                </Grid2>
                <Grid2 size={6}/>
                <Grid2 size={6}>
                    <Button variant="contained" sx={{width:"100%"}} onClick={handleRegister}>confirm</Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Register