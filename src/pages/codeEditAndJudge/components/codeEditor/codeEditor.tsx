import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input"
import {submitCode,runCode} from "@/apis/problem";

import * as React from 'react';
import "./codeEditor.css"

function CodeEditor() {
  return (
    <div className="codeEditor-root">
      <div className="CodeEditorInner-container">
        <CodeEditorInner/>
      </div>
      <div className="CodeToolBar-container">
        <CodeToolBar/>
      </div>
      <div className="CodeConsoleInput-container">
        <div className="CodeConsole-container">
          <CodeConsole/>
        </div>
        <div className="CodeInput-container">
          <CodeInput/>
        </div>
      </div>
    </div> 
  );
}
export default CodeEditor;