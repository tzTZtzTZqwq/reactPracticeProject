import { ListItem, Paper, Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router";
function ProblemItem({id,name,tags}){
    return(
        <div className="problems-problemItem-root">
            <ListItem>
                <Paper sx={{width:'100%', display:'flex'}}>
                    <p style={{marginLeft:'20px', width:'4%',minWidth:'50px'}}>{id}</p>
                    <p style={{marginLeft:'20px', width:'20%',textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}>{name}</p>
                    <p style={{marginLeft:'20px'}}>Two Sum</p>
                    <Link to={'/attempt/'+id} style={{marginLeft:'auto',marginTop:'0',marginBottom:'0',padding:'0'}}>
                    <Button sx={{height:'100%'}}>
                        <ArrowForwardIcon/>
                    </Button>
                    </Link>
                </Paper>
            </ListItem>
        </div>
    )
}
export default ProblemItem