import { Button, ListItem, Paper } from '@mui/material';
import ProblemItem from './problemItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import List from '@mui/material/List';
function ProblemList(){
    return(
        <div className="problems-problemList-root">
            <div>
                <List dense>
                    <ListItem>
                        <Paper sx={{width:'100%', display:'flex'}}>
                            <p style={{marginLeft:'20px', width:'4%'}}>ID</p>
                            <p style={{marginLeft:'20px', width:'20%'}}>NAME</p>
                            <p style={{marginLeft:'20px', width:'20%'}}>TAGS</p>
                        </Paper>
                    </ListItem>
                    <ProblemItem id="P0001" name="two sum" tags=""/>
                    <ProblemItem id="P0002" name="two sumadada" tags=""/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags=""/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags=""/>
                    <ProblemItem id="P0001" name="two sum" tags=""/>
                    <ProblemItem id="P0002" name="two sumadada" tags=""/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags=""/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags=""/>
                    <ProblemItem id="P0001" name="two sum" tags=""/>
                    <ProblemItem id="P0002" name="two sumadada" tags=""/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags=""/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags=""/>
                   
                </List>
            </div>
        </div>
    )
}
export default ProblemList;