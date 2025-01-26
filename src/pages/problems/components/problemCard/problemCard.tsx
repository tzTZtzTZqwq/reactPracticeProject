import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './problemCard.css'
function ProblemCard(){
    return(
        <div className="problems-problemcard-root">
            <Card sx={{height:'100%'}}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }}>
                P1022
            </Typography>
            <Typography sx={{ fontSize: 25 }}>
                Two Sum
            </Typography>
            <Typography sx={{ fontSize: 18 }}>
                eazy·medium·hard
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{marginLeft:'auto',marginTop:'auto',overflow:'hidden'}}>
                    <ArrowForwardIcon/>
                </Button>
            </CardActions>
            </Card>
        </div>
    )
}
export default ProblemCard