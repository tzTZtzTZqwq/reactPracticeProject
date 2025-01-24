import "./ToolBar.css"
import Button from '@mui/material/Button';
import * as React from 'react';

type codeToolBarProps = {
    submit: any,
    run: any;
    refresh: any;
}

function CodeToolBar({run, submit ,refresh}: codeToolBarProps) {
    return (
        <div className="codeEditor-ToolBar-root">
            <Button variant="outlined" onClick={async() => await run()}>
                Run
            </Button>
            <Button variant="outlined" onClick={async() => await submit()}>
                Submit
            </Button>
            <Button variant="outlined" onClick={async() => await refresh()}>
                Refresh
            </Button>
        </div>
    );
}

export default CodeToolBar;