import "./ToolBar.css"
import Button from '@mui/material/Button';
import * as React from 'react';

import { store,runCodeS,submitCodeS,refreshS,logAll } from '../../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Switch, Tooltip } from "@mui/material";
import { PlayCircle, Refresh } from "@mui/icons-material";

function CodeToolBar() {
    const codeSnap = useSnapshot(store);
    return (
        <div className="codeEditor-ToolBar-root" style={{display:'flex',padding:'10px',gap:'10px'}}>
            <Tooltip title="先在右下角设置函数的参数，执行后可查看输出">
            <Button 
                variant="contained" 
                onClick={async() => await runCodeS()}
                onMouseEnter={() => store.ifHoveringRunButton = true}
                onMouseLeave={() => store.ifHoveringRunButton = false}
            >
                <p style={{fontSize:'10px',margin:'0'}}> Run - 执行 </p>
               
            </Button>
            </Tooltip>
            <Tooltip title="测试代码结果是否正确">
            <Button 
                variant="contained" 
                onClick={async() => await submitCodeS()}
                onMouseEnter={() => store.ifHoveringSubmitButton = true}
                onMouseLeave={() => store.ifHoveringSubmitButton = false}
            >
                <p style={{fontSize:'10px',margin:'0'}}> Submit - 提交 </p>
            </Button>
            </Tooltip>
            <Tooltip title="刷新提交记录">
            <Button 
                variant="contained" 
                onClick={async() => await refreshS()}
            >
                <p style={{fontSize:'10px',margin:'0'}}> Refresh - 刷新 </p>
            </Button>
            </Tooltip>
            <Tooltip title="重置代码">
            <Button 
                sx={{width:'30px',minWidth:'30px',height:'30px',maxHeight:'30px'}}
                variant="contained" 
                onClick={async() => await refreshS()}
            >
                <Refresh/>
            </Button>
            </Tooltip>
            <Button 
                variant="outlined" 
                onClick={async() => logAll()} 
                sx={{display:'none'}}
            >
                
                LOG
                
            </Button>
        </div>
    );
}

export default CodeToolBar;