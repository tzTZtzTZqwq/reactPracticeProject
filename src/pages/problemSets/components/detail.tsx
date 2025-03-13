import { Grid2, List, ListItem } from "@mui/material";
import SetItem from "./setItem/setItem";
import SetBar from "./setBar/setBar";
import './detail.css'
function Detail(){
    return(
        <div className="problemSet-detail-root">
            <Grid2 container spacing={2}>
                
                <SetBar title="section 1"/>
                <SetItem title="set 1" text="p1"/>
                <SetItem title="set 2" text="p2"/>
                <SetBar title="section 2"/>
                <SetItem title="set 1" text="p3"/>
               

            </Grid2>
        </div>
    )
}
export default Detail;