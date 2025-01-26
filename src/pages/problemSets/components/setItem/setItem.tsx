import { Button, Card, CardActions, CardContent, Grid2, Typography } from "@mui/material";
import  ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function SetItem(){
    return(
        <Grid2 size={3} className="problemSets-setItem-root">
            <Card sx={{height:'200px'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 28 }}>
                        P1022
                    </Typography>
                    <Typography variant='body1' sx={{ fontSize:14,wordBreak:'break-all'}}>
                        111111111121111111kljbhjvkg hbjnkbjklhvjkgch
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