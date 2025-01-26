import NavBar from "@/components/navBar/navBar"
import Detail from "./components/detail"
import './problemSets.css'
import { Grid2 } from "@mui/material"
function ProblemSets(){
    return(
        <div className="problemSets-root" >
            <NavBar/>
            <Detail/>
        </div>
        
    )
}

export default ProblemSets