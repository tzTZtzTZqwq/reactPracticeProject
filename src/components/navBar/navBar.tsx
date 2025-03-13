import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Divider, styled, Switch } from '@mui/material';
  
function NavBar(){
    const [loginButtonText, setLoginButtonText] = useState('Login');

    useEffect(() => {
        const username = document.cookie.includes('username=') ? document.cookie.split('username=')[1].split(';')[0] : '登录/注册';
        setLoginButtonText(username);
    }, []);

    return(
        <div className='navbar-root'>
            <AppBar position="static" sx={{height:'60px'}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{minWidth:'100px'}}>
                    OJ
                </Typography>
                {/*tasks*/}
                <Link to="/frontpage">
                <Button variant="text" sx={{marginRight:'20px',minWidth:'90px',width:'100%',color:'#ffffff',textAlign:'center'}}>主页</Button>
                </Link>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', height: '40%',alignSelf:'center'}} />
                <Link to="/problems">
                <Button variant="text" sx={{marginRight:'20px',minWidth:'90px',width:'100%',color:'#ffffff', textAlign: 'center'}}>题目列表</Button>
                </Link>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', height: '40%',alignSelf:'center'}} />
                <Link to="/problemSets">
                <Button variant="text" sx={{marginRight:'20px',minWidth:'90px',width:'100%',color:'#ffffff', textAlign: 'center'}}>专题</Button>
                </Link>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', height: '40%',alignSelf:'center'}} />
                <Link to="/account">
                <Button variant="text" sx={{marginRight:'20px',minWidth:'90px',width:'100%',color:'#ffffff', textAlign: 'center'}}>账户</Button>
                </Link>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', height: '40%',alignSelf:'center'}} />
                <Link to="/management">
                <Button variant="text" sx={{display:'none',marginRight:'20px',minWidth:'100px',width:'100%',color:'#ffffff', textAlign: 'center'}}>管理</Button>
                </Link>
                <Link to="/tutorial">
                <Button variant="text" sx={{marginRight:'20px',minWidth:'90px',width:'100%',color:'#ffffff', textAlign: 'center'}}>教程</Button>
                </Link>
                <div style={{flexGrow:1}}></div>
                <Button color="inherit">{loginButtonText}</Button>
                
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar