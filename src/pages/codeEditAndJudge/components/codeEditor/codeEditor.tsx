import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input"
import { Grid2, Paper, Stack } from "@mui/material";
import { useSnapshot } from "valtio";
import { store } from "../../stores/code";

function CodeEditor() {
  const codeSnap = useSnapshot(store);
  return (
    <div style={{margin:'15px'}}>
      <Paper sx={{padding:'10px'}}>
        <div style={{height:'50vh'}}>
          <CodeEditorInner/>
        </div>
        <div style={{height:'7%'}}>
          <CodeToolBar/>
        </div>
        <div style={{height:'28vh',display:'flex', boxShadow: codeSnap.ifHoveringRunButton ? '0 0 10px #bbbbbb' : 'none', zIndex: codeSnap.ifHoveringRunButton ? 1 : 'auto'}}>
          <div style={{width:'100%', display:codeSnap.ifUsingInput?'none':'block'}}>
          <CodeConsole/>
          </div>
          <div style={{width:'100%', display:!codeSnap.ifUsingInput?'none':'block'}}>
          <CodeInput/>
          </div>
        </div>
      </Paper>
    </div> 
  );
}
export default CodeEditor;