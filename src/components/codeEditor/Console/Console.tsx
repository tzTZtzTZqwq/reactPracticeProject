import * as React from 'react';
import CodeMirror, { EditorView, Panel, showPanel } from '@uiw/react-codemirror';
import "./Console.css"

type CodeConsoleProps = {
  consoleOutput: string;
}

function codeConsoleInfoPanel(view: EditorView): Panel {
  let dom = document.createElement("div");
  dom.textContent = "Output";
  return{dom}
}

function CodeConsole({ consoleOutput }: CodeConsoleProps) {
  return (
    <div className="codeEditor-Console-root">
      <CodeMirror
        value={consoleOutput}
        style={{ height: '100%', width: '100%' }}
        width="100%"
        height="100%"
        min-height="200px"
        readOnly={true}
        extensions={[
          showPanel.of(codeConsoleInfoPanel)
        ]}
        />
    </div> 
  );
}
export default CodeConsole;