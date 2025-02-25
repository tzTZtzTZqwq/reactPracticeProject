import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input"
import { Grid2, Paper, Stack } from "@mui/material";

function CodeEditor() {
  return (
    <div style={{margin:'15px'}}>
      <Paper sx={{padding:'10px'}}>
        <div style={{height:'60vh'}}>
          <CodeEditorInner/>
        </div>
        <div style={{height:'10%'}}>
          <CodeToolBar/>
        </div>
        <div style={{height:'17vh',display:'flex'}}>
          <div style={{width:'70%'}}>
          <CodeConsole/>
          </div>
          <div style={{width:'30%'}}>
          <CodeInput/>
          </div>
        </div>
      </Paper>
    </div> 
  );
}
export default CodeEditor;