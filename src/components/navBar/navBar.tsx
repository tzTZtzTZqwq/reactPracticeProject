import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
function NavBar(){
    return(
        <div className='navbar-root'>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{minWidth:'100px'}}>
                    OJ
                </Typography>
                <Link to="/tasks">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>tasks</Button>
                </Link>
                <Link to="/problems">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>problems</Button>
                </Link>
                <Link to="/problemSets">
                <Button variant="contained" sx={{marginRight:'20px',minWidth:'100px'}}>problemsets</Button>
                </Link>
                <div style={{flexGrow:1}}></div>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar