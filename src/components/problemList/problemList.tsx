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
                    <ProblemItem id="P0001" name="two sum" tags={[101,201]}/>
                    <ProblemItem id="P0002" name="two sumadada" tags={[102]}/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags={[103]}/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags={[101]}/>
                    <ProblemItem id="P0001" name="two sum" tags={[102,201]}/>
                    <ProblemItem id="P0002" name="two sumadada" tags={[103]}/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags={[101]}/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags={[102,201]}/>
                    <ProblemItem id="P0001" name="two sum" tags={[103]}/>
                    <ProblemItem id="P0002" name="two sumadada" tags={[101,201]}/>
                    <ProblemItem id="P0003" name="two sumadawdada" tags={[102]}/>
                    <ProblemItem id="P0004" name="two sumawdawwdad" tags={[103]}/>
                   
                </List>
            </div>
        </div>
    )
}
export default ProblemList;