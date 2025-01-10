import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { autocompletion } from '@codemirror/autocomplete';
import { showPanel, EditorView } from '@codemirror/view';
import "./Editor.css"
import { Dispatch } from 'react';

type CodeEditorProps = {
  onCodeChange: Dispatch<React.SetStateAction<string>>
}
function CodeEditorInner({ onCodeChange }: CodeEditorProps) {
  const [value, setValue] = React.useState(
    "import java.util.ArrayList;\n" +
"import java.util.Scanner;\n" +
"public class Main {\n" +
"    public static void main(String[] args) {\n" +
"        System.out.println(\"Hello World!\");\n" +
"\n" +
"        int test = 0;\n" +
"\n" +
"        switch(test){\n" +
"            case 0://Fibonacci sequence\n" +
"                int f = 5;\n" +
"                int n1 = 1;\n" +
"                int n2 = 1;\n" +
"                for (int i = 1;i <= 5;i++){\n" +
"                    int temp_n2 = n2;\n" +
"                    n2 = n1 + n2;\n" +
"                    n1 = temp_n2;\n" +
"                    System.out.println(n2);\n" +
"                }\n" +
"                break;\n" +
"            case 1://time limit exceeded\n" +
"                long sum = 0;\n" +
"                for(long i = 0;i<=100000000000000l;i++){\n" +
"                    sum += i;\n" +
"                }\n" +
"                System.out.println(sum);\n" +
"                break;\n" +
"            case 2://memory limit exceeded(not working)\n" +
"                ArrayList<Long> numbers = new ArrayList<Long>();\n" +
"                for(long i = 0;i<=1000000l;i++){\n" +
"                    numbers.add(i);\n" +
"                }\n" +
"                System.out.println(numbers.size());\n" +
"                break;\n" +
"            case 3://input\n" +
"                Scanner scan = new Scanner(System.in);\n" +
"                double f2 = (double)scan.nextInt();\n" +
"                double num = (1/Math.sqrt(5)) * (Math.pow((1+Math.sqrt(5))/2,f2) - Math.pow((1-Math.sqrt(5))/2,f2));\n" +
"                System.out.println((int)f2+\"th number in the fibonacci sequence is: \"+(int)num);\n" +
"                break;\n" +
"        }\n" +
"    }\n" +
"}\n"

  );

  const myCompletions = context => {
    let word = context.matchBefore(/\w*/)
    if(!word || (word.from == word.to && !context.explicit)) return null
    return {
      from: word.from,
      options: []//[{label: "sout", type: "keyword", apply:"System.out.println("}]
    }
  }
  
  const onChange = React.useCallback((value) => {
    setValue(value);
    onCodeChange(value);
  }, [onCodeChange]);
  
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
        value={value} 
        height="100%" 
        width="100%"
        style={{ height: '100%', width: '100%' }}
        basicSetup={{
          tabSize: 4,
          indentUnit: 4,
          autocompletion: true,
          closeBrackets: true,
          matchBrackets: true,
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