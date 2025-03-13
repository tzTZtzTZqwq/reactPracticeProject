import { proxy, useSnapshot } from 'valtio'
import {submitCode,runCode,fetchProblemDetail,fetchResult} from '@/apis/problem'

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


export const store = proxy<{
  code: string;//代码
  input: string;//输入
  output: string;//控制台输出
  problemIndex: string;//题目编号(数字)
  problemName: string;//题目名
  problemDescription: string;
  defaultCode:string;//进入题目的时候显示的默认代码
  result:string//判题结果
  blockResultArray: Array<any>,//判题结果方块
  inputForm:any//输入表单格式
  inputFormResultArray:Array<any>,//输入表单结果
  ifHoveringRunButton: boolean,//鼠标悬浮于执行按钮
  ifHoveringSubmitButton: boolean,//鼠标悬浮于提交按钮
  tabIndex:number//目前CodeToolbar选择的tab
  }>({
  code: localStorage.getItem('code') || defaultCode,
  input: '',
  output: '',
  defaultCode: '',
  problemIndex: '',
  problemName: '',
  problemDescription: '',
  result: '',
  blockResultArray: [],
  //inputForm: [],
  inputForm: {form:[],default:[]},
  inputFormResultArray: [],
  ifHoveringRunButton: false,
  ifHoveringSubmitButton: false,
  tabIndex : 0
})

async function initializeData(problemIndex:string){
    store.problemIndex = problemIndex;
    var problemDetail = await fetchProblemDetail(problemIndex.toString());
    store.problemDescription = problemDetail['description'];
    store.defaultCode = problemDetail['default_code'];
    store.problemName = problemDetail['title'];
    store.code = store.defaultCode;
    store.inputForm = JSON.parse(problemDetail['input_form']);
    store.inputFormResultArray = store.inputForm.default.map(item => {
      const formItem = store.inputForm.form.find(f => f.func === item.func);
      return { ...item, name: formItem ? formItem.name : '' };
    });
    var attemptResult = await fetchResult(problemIndex);
    store.result = attemptResult['result']
    store.blockResultArray = attemptResult['blockStatusArray']
}

async function runCodeS(){
    store.output = 'Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.';
    store.tabIndex = 0;
    const inputData = [
      store.inputFormResultArray.length,
      ...store.inputFormResultArray.map(item => item.func),
      ...store.inputFormResultArray.map(item => item.param)
    ].join('\n')+'\n';
    
    store.output = await runCode(store.code, inputData, store.problemIndex);
}

async function submitCodeS(){
    store.output = 'Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.';
    store.tabIndex = 0;
    const result = await submitCode(store.code, store.input, store.problemIndex);
    console.log(result);
    store.output = /^[0-9]$/.test(result) ? '按refresh刷新状态' : result;
}

async function refreshS() {
    store.tabIndex = 2;
    var attemptResult = await fetchResult(store.problemIndex);
    store.result = attemptResult['result']
    store.blockResultArray = attemptResult['blockStatusArray']
}

function logAll(){
  console.log(store.code);
  console.log(store.input);
  console.log(store.output);
}


export {initializeData,runCodeS,submitCodeS,refreshS,logAll}