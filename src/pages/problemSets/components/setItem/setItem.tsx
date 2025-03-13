import { Button, Card, CardActions, CardContent, Grid2, Typography } from "@mui/material";
import  ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function SetItem({title,text}){
    return(
        <Grid2 size={3} className="problemSets-setItem-root">
            <Card sx={{height:'200px'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 28 }}>
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize:14,wordBreak:'break-all'}}>
                        {text}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{marginLeft:'auto',marginTop:'auto',overflow:'hidden'}}>
                        <ArrowForwardIcon/>
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    )
}
export default SetItem;