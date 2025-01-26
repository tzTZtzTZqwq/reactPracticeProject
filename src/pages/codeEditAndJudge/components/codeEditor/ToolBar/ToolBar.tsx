import "./ToolBar.css"
import Button from '@mui/material/Button';
import * as React from 'react';

import { store,runCodeS,submitCodeS,refreshS,logAll } from '../../../stores/code'
import { useSnapshot } from 'valtio';

function CodeToolBar() {
    const codeStore = useSnapshot(store);
    return (
        <div className="codeEditor-ToolBar-root">
            <Button variant="outlined" onClick={async() => await runCodeS()}>
                Run
            </Button>
            <Button variant="outlined" onClick={async() => await submitCodeS()}>
                Submit
            </Button>
            <Button variant="outlined" onClick={async() => await refreshS()}>
                Refresh
            </Button>
            <Button variant="outlined" onClick={async() => logAll()}>
                LOG
            </Button>
        </div>
    );
}

export default CodeToolBar;