import "./ToolBar.css"
import Button from '@mui/material/Button';
import * as React from 'react';

import { store,runCodeS,submitCodeS,refreshS,logAll } from '../../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Switch, Tooltip } from "@mui/material";

function CodeToolBar() {
    const codeSnap = useSnapshot(store);
    return (
        <div className="codeEditor-ToolBar-root" style={{display:'flex',padding:'10px',gap:'10px'}}>
            <Tooltip title="运行代码，在右下角设置输入，运行后可查看输出">
            <Button variant="contained" onClick={async() => await runCodeS()}>
                Run
            </Button>
            </Tooltip>
            <Tooltip title="提交代码，用设置好的数据测试程序输出，只能查看程序输出是否正确">
            <Button variant="contained" onClick={async() => await submitCodeS()}>
                Submit
            </Button>
            </Tooltip>
            <Tooltip title="刷新提交记录">
            <Button variant="contained" onClick={async() => await refreshS()}>
                Refresh
            </Button>
            </Tooltip>
            <Button variant="outlined" onClick={async() => logAll()} sx={{display:'none'}}>
                LOG
            </Button>
            <Paper sx={{display:'flex',paddingLeft:'10px',paddingRight:'10px'}}>
            <p style={{margin:'0',marginTop:'auto',marginBottom:'auto'}}>input form</p>
            <Switch onChange={()=>{store.ifUsingRawInput = !codeSnap.ifUsingRawInput}} sx={{ transform: 'scale(0.9)' }}/>
            <p style={{margin:'0',marginTop:'auto',marginBottom:'auto'}}>raw input</p>
            </Paper>
        </div>
    );
}

export default CodeToolBar;