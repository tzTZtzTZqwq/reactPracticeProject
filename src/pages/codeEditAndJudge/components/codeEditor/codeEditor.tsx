import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input";
import { Paper, Tabs, Tab, Box, Toolbar } from "@mui/material";
import { useSnapshot } from "valtio";
import { store } from "../../stores/code";
import { useState } from "react";
import JudgeStatsPanel from "../judgePanel/judgePanel";

function CodeEditor() {
  const codeSnap = useSnapshot(store);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    store.tabIndex = newValue;
  };

  return (
    <Paper sx={{  margin: '10px',padding: '10px',height:'100%'}}>
      <div style={{ height: '60%' }}>
        <CodeEditorInner />
      </div>
      <div style={{ height: '30%', display: 'flex'}}>
        <Box sx={{ width: '100%' }}>
          <Tabs value={codeSnap.tabIndex} onChange={handleTabChange}>
            <Tab label="输出" />
            <Tab label="输入" sx={{ boxShadow: codeSnap.ifHoveringRunButton ? '0 0 10px #bbbbbb' : 'none', zIndex: codeSnap.ifHoveringRunButton ? 1 : 'auto' }}/>
            <Tab label="提交记录"sx={{boxShadow: codeSnap.ifHoveringSubmitButton ? '0 0 10px #bbbbbb' : 'none', zIndex: codeSnap.ifHoveringSubmitButton ? 1 : 'auto'}}/>
            <CodeToolBar/>
          </Tabs>
          
          {codeSnap.tabIndex === 0 && <CodeConsole />}
          {codeSnap.tabIndex  === 1 && <CodeInput />}
          {codeSnap.tabIndex  === 2 && <JudgeStatsPanel blockStatusArray={codeSnap.blockResultArray} result={codeSnap.result} />}
        </Box>
      </div>
    </Paper>
  );
}

export default CodeEditor;