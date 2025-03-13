import { SetStateAction } from "react";
import { blockStatusEnum } from "@/defines/judgeDefines";
import { apiRoot } from "./apiDefines";

const getProblemList = async () => {
  try {
    const response = await fetch(apiRoot+'/problems/getProblemList',{
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return [];
  }
}



const submitCode = async (code: string,input: string,problem_index: string) => {
  try {
    const response = await fetch(apiRoot+'/attempts/submitCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input,problem_index }),
      credentials: 'include' 
    });
    const data = await response.json();
    if (typeof data.output === 'string') {
      return data.output;
    } else {
      console.error('Error 02 got', data.output);
      return "Error";
    }
    return data;
  } catch (error) {
    console.error('Error', error);
    return "Error"+error;
  }
};

const runCode = async (code: string,input: string,problem_index:string = "") => {
  try {
    const response = await fetch(apiRoot+'/attempts/runCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input,problem_index }),
      credentials: 'include' 
    });
    const data = await response.json();
    if (typeof data.output === 'string') {
      return data.output;
    } else {
      console.error('error 01 got:', data.output);
      return "Error";
    }
    return data;
  } catch (error) {
    console.error('Error', error);
    return "Error"+error;
  }
};

//returns
//  description:string
const fetchProblemDetail = async (problem_index) => {
  try {
    const response = await fetch(apiRoot+'/records/getProblem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({problem_index}),
      credentials: 'include' 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching description:', error);
    return "failed to fetch description";
  }
};



//returns
//  result:string the description of result ~40 words
//  blockStatusArray:Array an array of blocks
const fetchResult = async (problem_index) => {
  var result = '';
  var blockStatusArray = [];
  try {
    const response = await fetch(apiRoot+'/records/getJudgeResult', {
      method: 'POST',
      body: JSON.stringify({problem_index}),
      credentials: 'include' 
    });
    const data = await response.json();
    
    if(data == null){
      result = "You havent submit any code yet";
      return {result:result,blockStatusArray:[]};
    }

    if(data.result_description==""){
      result = "你还没有提交过代码"
    }else{
      result = "Submitted at:"+data.time+"\n"+data.result_description + "testcases passed";
    }
    
    if(data.result!=''){
      const resultArray = JSON.parse(data.result);
      blockStatusArray = (Array.from({ length: resultArray.length }, (_, index) => ({
        status: resultArray[index]['status'] === 0 ? blockStatusEnum.ACCEPTED : 
        resultArray[index]['status'] === 1 ? blockStatusEnum.UNKNOWN : 
        resultArray[index]['status'] === 5 ? blockStatusEnum.TIMELIMIT : 
        resultArray[index]['status'] === 6 ? blockStatusEnum.MEMORYLIMIT : 
        resultArray[index]['status'] === 7 ? blockStatusEnum.WRONGANSWER :
        resultArray[index]['status'] === 8 ? blockStatusEnum.RUNTIMEERROR :
                blockStatusEnum.UNKNOWN,
        time: (resultArray[index]['timeOutput'] * 1000) + "ms",
        memory:   resultArray[index]['memory'] + "KB",
        resultGroup: resultArray[index]['resultGroup']
      })));
    }
    return {result:result,blockStatusArray:blockStatusArray}
  } catch (error) {
    console.error('Error', error); 
    return [];
  }
};

export {submitCode,runCode,fetchProblemDetail,fetchResult,getProblemList}