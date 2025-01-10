import "./ToolBar.css"
import * as React from 'react';

type codeToolBarProps = {
    submit: () => Promise<any>;
    run: () => Promise<any>;
}

function CodeToolBar({run, submit }: codeToolBarProps) {
    return (
        <div className="codeEditor-ToolBar-root">
            <div style={{ display: 'none' }}>
                <button onClick={async() => await run()}>
                    Run
                </button>
            </div>
            <button onClick={async() => await submit()}>
                Submit
            </button>
        </div>
    );
}

export default CodeToolBar;