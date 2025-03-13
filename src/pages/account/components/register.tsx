import { Button, Grid2, TextField, Typography } from "@mui/material";
import { register, handleVerificationSuccess,handleVerifyEmail } from "@/apis/account";
import * as React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [invitationCode, setInvitationCode] = React.useState("");
    const [ifEnableCaptcha,setIfEnableCaptcha] = React.useState(false);
    const handleRegister = async () => {
        const status = await register(username, password);
        if (status === 0) {
            console.log("success");
        } else {
            console.log("failed");
        }
    };

    const isPasswordLongEnough = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        <div>
            <Grid2 container sx={{ width: "100%", height: "100%" }} spacing={2}>
                <Grid2 size={12}>
                    <p style={{ fontSize: '40px', marginTop: '5px', marginBottom: '5px' }}>注册账号</p>
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="用户名"
                        sx={{ width: "100%" }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="密码"
                        sx={{ width: "100%" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <Typography sx={{ color: isPasswordLongEnough ? 'green' : 'red', transition: 'color 0.5s' }}>
                        · 密码至少8位长
                    </Typography>
                    <Typography sx={{ color: hasLetter ? 'green' : 'red', transition: 'color 0.5s' }}>
                        · 必须包含字母
                    </Typography>
                    <Typography sx={{ color: hasNumber && hasSymbol ? 'green' : 'red', transition: 'color 0.5s' }}>
                        · 必须包含数字和符号
                    </Typography>
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="重复密码"
                        sx={{ width: "100%" }}
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
                <Grid2 size={9}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="邮箱"
                        sx={{ width: "100%" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={3}>
                    <Button 
                        sx={{width:'100%',height:'100%'}}
                        variant="contained"
                        onClick={()=>{handleVerifyEmail(email)}}>
                        验证
                    </Button>
                </Grid2>
                
                <Grid2 size={12}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="验证码"
                        sx={{ width: "100%" }}
                        value={invitationCode}
                        onChange={(e) => handleVerifyEmail())
                    />
                </Grid2>
                
                <Grid2 size={12}>
                    <Button variant="contained" sx={{ width: "100%", height: '40px' }} onClick={handleRegister}>注册</Button>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default Register;