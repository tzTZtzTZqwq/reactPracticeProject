import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import "./Input.css"
import { Dispatch } from 'react';
import { showPanel, EditorView } from '@codemirror/view';

type CodeEditorProps = {
  onCodeChange: Dispatch<React.SetStateAction<string>>
}

function CodeInput({ onCodeChange }: CodeEditorProps) {
  const [value, setValue] = React.useState<string>("");
  
  const onChange = React.useCallback((v: React.SetStateAction<string>) => {
    setValue(v);
    onCodeChange(v);
  }, [onCodeChange]);
  
  function codeInputInfoPanel(view: EditorView): Panel {
    let dom = document.createElement("div");
    dom.textContent = "Input";
    return{dom}
  }

  return (
    <div className="codeEditor-Input-root">
      <CodeMirror 
        value={typeof value === 'string' ? value : 'error 02 expected string but got: '+typeof value} 
        height="100%" 
        width="100%"
        style={{ height: '100%', width: '100%' }}
        basicSetup={{
          indentUnit: 4,
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