import NavBar from "@/components/navBar/navBar"
import Outline from "./components/outline"
import ProblemList from "./components/problemList/problemList"
import './problems.css'
function Problems(){
    return(
        <div className="problems-root" >
            <NavBar/>
            <Outline/>
            <ProblemList/>
        </div>
        
    )
}

export default Problems