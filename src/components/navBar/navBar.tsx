import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { styled, Switch } from '@mui/material';
  
function NavBar(){
    const [loginButtonText, setLoginButtonText] = useState('Login');

    useEffect(() => {
        const username = document.cookie.includes('username=') ? document.cookie.split('username=')[1].split(';')[0] : 'Login';
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
                <Link to="/problems">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>problems - 题目列表</Button>
                </Link>
                <Link to="/problemSets">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>problemsets - 专题</Button>
                </Link>
                <Link to="/account">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px',display:'none'}}>accounts</Button>
                </Link>
                <Link to="/management">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px',display:'none'}}>management</Button>
                </Link>
                <Link to="/tutorial">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>tutorial</Button>
                </Link>
                <div style={{flexGrow:1}}></div>
                <Button color="inherit">{loginButtonText}</Button>
                
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar