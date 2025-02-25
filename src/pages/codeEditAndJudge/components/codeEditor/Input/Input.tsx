import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import "./Input.css"
import { showPanel, EditorView } from '@codemirror/view';
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';
import InputForm from './InputForm';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Stack } from '@mui/material';

function CodeInput() {
  const [showCodeMirror, setShowCodeMirror] = React.useState(true);
  const codeSnap = useSnapshot(store);
  const [codeMirrorValue, setCodeMirrorValue] = React.useState(codeSnap.input);

  const onChange = React.useCallback((value: string) => {
    store.input = value;
  }, []);

  React.useEffect(() => {
    setCodeMirrorValue(codeSnap.input);
  }, [codeSnap.input]);

  function codeInputInfoPanel(view: EditorView): Panel {
    let dom = document.createElement("div");
    dom.textContent = "Input";
    return { dom };
  }

  const handleToggle = () => {
    setShowCodeMirror(!showCodeMirror);
  };

  return (
    <div className="codeEditor-Input-root">
        <CodeMirror
          value={codeMirrorValue}
          height="100%"
          width="100%"
          style={{ height:codeSnap.ifUsingRawInput?'100%':'0', width: '100%',visibility:codeSnap.ifUsingRawInput?'visible':'hidden' }}
          basicSetup={{
            lineNumbers: true,
          }}
          extensions={[
            showPanel.of(codeInputInfoPanel)
          ]}
          onChange={onChange}
        />
        <div style={{visibility:codeSnap.ifUsingRawInput?'hidden':'visible',width:'100%',height:'100%'}}>
          <InputForm/>
        </div>
    </div>
  );
}

export default CodeInput;