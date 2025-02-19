import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import "./Input.css"
import { Dispatch } from 'react';
import { showPanel, EditorView } from '@codemirror/view';
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';


function CodeInput() {
  
  const onChange = React.useCallback((value: string) => {
    store.input = value;
  }, []);
  
  function codeInputInfoPanel(view: EditorView): Panel {
    let dom = document.createElement("div");
    dom.textContent = "Input";
    return{dom}
  }

  return (
    <div className="codeEditor-Input-root">
      <CodeMirror 
        value="" 
        height="100%" 
        width="100%"
        style={{ height: '100%', width: '100%' }}
        basicSetup={{
          lineNumbers: true,
        }}
        extensions={[
          showPanel.of(codeInputInfoPanel)
        ]}
        onChange={onChange}
      />
    </div>
  );
}

export default CodeInput;