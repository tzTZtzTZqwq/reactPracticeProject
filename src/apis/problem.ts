import { SetStateAction } from "react";
import { blockStatusEnum } from "@/defines/judgeDefines";
import { apiRoot } from "./apiDefines";

const getProblemList = async () => {
  try {
    const response = await fetch(apiRoot+'/problems/getProblemList');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return [];
  }
}



const submitCode = async (code: string,input: string,problemName: string) => {
  try {
    const response = await fetch(apiRoot+'/attempts/submitCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input,problemName })
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

const runCode = async (code: string,input: string) => {
  try {
    const response = await fetch(apiRoot+'/attempts/runCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input })
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
//  description:string the description of the problem ~200 words
const fetchDescription = async () => {
  try {
    const response = await fetch(apiRoot+'/records/getProblem');
    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error fetching description:', error);
    return "failed to fetch description";
  }
};

//returns
//  result:string the description of result ~40 words
//  blockStatusArray:Array an array of blocks
const fetchResult = async () => {
  var result = '';
  var blockStatusArray = [];
  try {
    const response = await fetch(apiRoot+'/records/getJudgeResult', {
      method: 'GET',
    });
    const data = await response.json();
    
    if(data == null){
      result = "You havent submit any code yet";
      return {result:result,blockStatusArray:[]};
    }
    result = data.result_description +" submitted at "+data.time;
    console.log(data)
    if(data.result!=''){
      const resultArray = JSON.parse(data.result);
      blockStatusArray = (Array.from({ length: resultArray.length }, (_, index) => ({
        status: resultArray[index]['status'] === 0 ? blockStatusEnum.ACCEPTED : 
        resultArray[index]['status'] === 1 ? blockStatusEnum.UNKNOWN : 
        resultArray[index]['status'] === 5 ? blockStatusEnum.TIMELIMIT : 
        resultArray[index]['status'] === 6 ? blockStatusEnum.MEMORYLIMIT : 
        resultArray[index]['status'] === 7 ? blockStatusEnum.WRONGANSWER :
                blockStatusEnum.UNKNOWN,
        time: (resultArray[index]['timeOutput'] * 1000) + "ms"
      })));
    }
    return {result:result,blockStatusArray:blockStatusArray}
  } catch (error) {
    console.error('Error', error); 
    return [];
  }
};

export {submitCode,runCode,fetchDescription,fetchResult,getProblemList}