import CodeEditorInner from "./Editor/Editor";
import CodeConsole from "./Console/Console";
import CodeToolBar from "./ToolBar/ToolBar";
import CodeInput from "./Input/Input"

import * as React from 'react';
import "./codeEditor.css"

type codeEditorProps = {
  refresh: () => Promise<any>;
}

function CodeEditor({refresh}: codeEditorProps) {
  const defaultCode = "import java.util.ArrayList;\n" +
"import java.util.Scanner;\n" +
"public class Main {\n" +
"    public static void main(String[] args) {\n" +
"\n" +
"        int test = 0;\n" +
"\n" +
"        Scanner scan = new Scanner(System.in);\n" +   
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
"                double f2 = (double)scan.nextInt();\n" +
"                double num = (1/Math.sqrt(5)) * (Math.pow((1+Math.sqrt(5))/2,f2) - Math.pow((1-Math.sqrt(5))/2,f2));\n" +
"                System.out.println((int)f2+\"th number in the fibonacci sequence is: \"+(int)num);\n" +
"                break;\n" +
"            case 4://two sum\n" +
"                int n,temp,T;\n" +
"                boolean found = false;\n" +
"                ArrayList<Integer> A = new ArrayList<>();\n" +
"                n = scan.nextInt();\n" +
"                for(int i = 1;i <= n;i++){\n" +
"                    temp = scan.nextInt();\n" +
"                    A.add(temp);\n" +
"                }\n" +
"                T = scan.nextInt();\n" +
"                for(int i = 0;i<=A.size()-1&&!found;i++){\n" +
"                    for(int j = i+1;j<=A.size()-1&&!found;j++){\n" +
"                        if(A.get(i)+A.get(j)==T){\n" +
"                            found = true;\n" +
"                            System.out.println(Math.min(i,j));\n" +
"                            System.out.println(Math.max(i,j));\n" +
"                        }\n" +
"                    }\n" +
"                }\n" +
"                break;\n" +
"        }\n" +
"    }\n" +
"}\n";

  const [code, setCode] = React.useState<string>(localStorage.getItem('code') || defaultCode);
  const [consoleOutput, setConsoleOutput] = React.useState("");
  const [input, setInput] = React.useState<string>("");

  const submitCode = async () => {
    setConsoleOutput('Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.');
    try {
      const response = await fetch('https://java.tonyz.top/program/judge.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input })
      });
      const data = await response.json();
      if (typeof data.output === 'string') {
        setConsoleOutput(data.output);
      } else {
        console.error('Expected output to be a string but got:', data.output);
        setConsoleOutput("Error");
      }
      return data;
    } catch (error) {
      console.error('Error', error);
      setConsoleOutput("Error"+error);
    }
  };

  const runCode = async () => {
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
      if (typeof data.output === 'string') {
        setConsoleOutput(data.output);
      } else {
        console.error('error 01 got:', data.output);
        setConsoleOutput("Error");
      }
      return data;
    } catch (error) {
      console.error('Error', error);
      setConsoleOutput("Error"+error);
    }
  };

  return (
    <div className="codeEditor-root">
      <div className="CodeEditorInner-container">
        <CodeEditorInner onCodeChange={setCode} initialCode={localStorage.getItem('code') || defaultCode}/>
      </div>
      <div className="CodeToolBar-container">
        <CodeToolBar run={runCode} submit={submitCode} refresh={refresh}/>
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