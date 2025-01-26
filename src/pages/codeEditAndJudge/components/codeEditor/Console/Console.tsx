import * as React from 'react';
import CodeMirror, { EditorView, Panel, showPanel } from '@uiw/react-codemirror';
import "./Console.css"
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';


function codeConsoleInfoPanel(view: EditorView): Panel {
  let dom = document.createElement("div");
  dom.textContent = "Output";
  return{dom}
}

function CodeConsole() {
  const codeSnap = useSnapshot(store);
  return (
    <div className="codeEditor-Console-root">
      <CodeMirror
        value={typeof codeSnap.output === 'string' ? codeSnap.output : 'error 02 expected string but got: '+typeof codeSnap.output}
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