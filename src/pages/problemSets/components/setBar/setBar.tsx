import { Grid2, Typography } from '@mui/material';
import { title } from '@uiw/react-md-editor';
function SetBar({title}){
    return(
        <Grid2 size={12} className="problemSets-setItem-root">
            <Typography variant="h5">
                {title}
            </Typography>
        </Grid2>
    )
}
export default SetBar;