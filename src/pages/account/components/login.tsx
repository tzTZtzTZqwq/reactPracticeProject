import { handleVerificationSuccess } from "@/apis/account";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ArrowRightAltSharp } from "@mui/icons-material";
import { Button, Grid2, TextField } from "@mui/material"
import * as React from 'react'

function Login(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <div>
            <Grid2 container sx={{width:"100%"}} spacing={2}>
                <Grid2 size={12}>
                    <p style={{fontSize:'40px',marginTop:'5px',marginBottom:'5px'}}>登录账号</p>
                </Grid2>
                <Grid2 size={12}>
                    <TextField 
                        size="small"
                        variant="outlined" 
                        label="username - 用户名"
                        sx={{width:"100%"}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField 
                        size="small"
                        variant="outlined" 
                        label="password - 密码"
                        sx={{width:"100%"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <HCaptcha
                        sitekey="c2c46ee6-063e-4a4e-b8c0-a8e29228a310"
                        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <div style={{height:"30px"}}/>
                </Grid2>
                <Grid2 size={12}>
                    <Button variant="contained" sx={{width:"100%",height:'40px'}}>登录</Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Login