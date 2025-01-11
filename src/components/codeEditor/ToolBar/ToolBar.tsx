import "./ToolBar.css"
import * as React from 'react';

type codeToolBarProps = {
    submit: () => Promise<any>;
    run: () => Promise<any>;
    refresh: () => Promise<any>;
}

function CodeToolBar({run, submit ,refresh}: codeToolBarProps) {
    return (
        <div className="codeEditor-ToolBar-root">
            <button onClick={async() => await run()}>
                Run
            </button>
            <button onClick={async() => await submit()}>
                Submit
            </button>
            <button onClick={async() => await refresh()}>
                Refresh
            </button>
        </div>
    );
}

export default CodeToolBar;