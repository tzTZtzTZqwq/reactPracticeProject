import { proxy, useSnapshot } from 'valtio'
import {submitCode,runCode,fetchDescription,fetchResult} from '@/apis/problem'

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
  code: string;
  input: string;
  output: string;
  problemIndex: string;
  problemName: string;
  problemDescription: string;
  result:string
  blockResultArray: Array<any>;
}>({
  code: localStorage.getItem('code') || defaultCode,
  input: '',
  output: '',
  problemIndex: '',
  problemName: '',
  problemDescription: '',
  result: '',
  blockResultArray: []
})

async function initializeData(problemIndex:string){
    store.problemIndex = problemIndex;
    store.problemDescription = await fetchDescription(problemIndex.toString());
    var attemptResult = await fetchResult();
    store.result = attemptResult['result']
    store.blockResultArray = attemptResult['blockStatusArray']
}

async function runCodeS(){
    store.output = 'Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.';
    store.output = await runCode(store.code,store.input,"2");
}

async function submitCodeS(){
    store.output = 'Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.';
    store.output = await submitCode(store.code,store.input,"2");
}

async function refreshS() {
    var attemptResult = await fetchResult();
    store.result = attemptResult['result']
    store.blockResultArray = attemptResult['blockStatusArray']
}

function logAll(){
  console.log(store.code);
  console.log(store.input);
  console.log(store.output);
}


export {initializeData,runCodeS,submitCodeS,refreshS,logAll}