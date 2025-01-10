import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input"

import * as React from 'react';
import "./codeEditor.css"

function CodeEditor() {
  
  const [code, setCode] = React.useState("import java.util.ArrayList;\n" +
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
"}\n");
  const [consoleOutput, setConsoleOutput] = React.useState("");
  const [input, setInput] = React.useState("");

  const submitCode = async () => {
    setConsoleOutput('Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.');
    try {
      const response = await fetch('https://java.tonyz.top/program/attempt.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input })
      });
      const data = await response.json();
      setConsoleOutput(data.output);
      return data;
    } catch (error) {
      console.error('Error', error);
      setConsoleOutput("Error"+error);
    }
  };

  const runCode = async () => {
    try {
      setConsoleOutput('your code has been submitted. Please wait');
      console.log(consoleOutput);
      const response = await fetch('https://java.tonyz.top/program/attempt.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      setConsoleOutput(data.output);
      return data;
    } catch (error) {
      console.error('Error submitting code:', error);
      setConsoleOutput("Error executing code");
    }
  };

  return (
    <div className="codeEditor-root">
      <div className="CodeEditorInner-container">
        <CodeEditorInner onCodeChange={setCode}/>
      </div>
      <div className="CodeToolBar-container">
        <CodeToolBar run={runCode} submit={submitCode}/>
      </div>
      <div className="CodeConsoleInput-container">
        <div className="CodeConsole-container">
          <CodeConsole consoleOutput={consoleOutput}/>
        </div>
        <div className="CodeInput-container">
          <CodeInput onCodeChange={setInput}/>
        </div>
      </div>
    </div> 
  );
}
export default CodeEditor;