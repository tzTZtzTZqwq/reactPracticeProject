import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { autocompletion } from '@codemirror/autocomplete';
import { showPanel, EditorView } from '@codemirror/view';
import "./Editor.css"
import { Dispatch } from 'react';
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';

function CodeEditorInner() {

  const myCompletions = context => {
    let word = context.matchBefore(/\w*/)
    if(!word || (word.from === word.to && !context.explicit)) return null
    return {
      from: word.from,
      options: []//[{label: "sout", type: "keyword", apply:"System.out.println("}]
    }
  }
  
  const onChange = React.useCallback((value) => {
    store.code = value;
    localStorage.setItem('code',value)
  }, []);
  
  function codeBottomInfoPanel(view: EditorView): Panel {
    let dom = document.createElement("div")
    let pos = view.state.selection.ranges[view.state.selection.mainIndex].anchor
    let line = view.state.doc.lineAt(pos)
    dom.textContent = `Line: ${line.number}, Column: ${pos - line.from + 1}`
    return {
      dom,
      update(update) {
        if (update.docChanged || update.selectionSet) {
          let pos = update.state.selection.ranges[update.state.selection.mainIndex].anchor
          let line = update.state.doc.lineAt(pos)
          dom.textContent = `Line: ${line.number}, Column: ${pos - line.from + 1}`
        }
      }
    }
  }

  return (
    <div className="codeEditor-Editor-root">
      <CodeMirror 
        value={typeof store.code === 'string' ? store.code : 'error 03 expected string but got: '+typeof store.code} 
        max-height="100%" 
        width="100%"
        style={{ height: '100%', width: '100%' }}
        basicSetup={{
          tabSize: 4,
          autocompletion: true,
          closeBrackets: true,
          bracketMatching: true,
          lineNumbers: true,
          foldGutter: true,
          indentOnInput: true,
        }}
        extensions={[
          java(),
          autocompletion({override: [myCompletions]}),
          showPanel.of(codeBottomInfoPanel)
        ]}
        onChange={onChange}
      />
    </div>
  );
}

export default CodeEditorInner;