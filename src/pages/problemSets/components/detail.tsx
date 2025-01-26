import { Grid2, List, ListItem } from "@mui/material";
import SetItem from "./setItem/setItem";
import SetBar from "./setBar/setBar";
import './detail.css'
function Detail(){
    return(
        <div className="problemSet-detail-root">
            <Grid2 container spacing={2}>
                
                <SetBar/>
                <SetItem/>
                <SetItem/>
                <SetBar/>
                <SetItem/>
                <SetItem/>
                <SetItem/>
                <SetItem/>
                <SetItem/>
                

            </Grid2>
        </div>
    )
}
export default Detail;