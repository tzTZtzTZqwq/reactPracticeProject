import NavBar from "@/components/navBar/navBar"
import ProblemList from "../problems/components/problemList/problemList"
import Description from "./components/description"
function problemSet(){
    return(
        <div>
            <NavBar/>
            <Description/>
            <ProblemList/>
        </div>
    )
}
export default problemSet 