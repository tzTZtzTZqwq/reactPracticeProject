import { SetStateAction } from "react";
import { blockStatusEnum } from "@/defines/judgeDefines";
const submitCode = async (code: string,input: string) => {
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
    const response = await fetch('https://java.tonyz.top/program/attempt.php', {
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
    const response = await fetch('https://java.tonyz.top/program/getProblem.php');
    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Error fetching description:', error);
  }
};

//returns
//  result:string the description of result ~40 words
//  blockStatusArray:Array an array of blocks
const fetchResult = async () => {
  var result = '';
  var blockStatusArray = [];
  try {
    const response = await fetch('https://java.tonyz.top/program/getJudgeResult.php', {
      method: 'GET',
    });
    const data = await response.json();
    
    if(data == null){
      result = "You havent submit any code yet";
      return {result:result,blockStatusArray:[]};
    }
    result = data.result_description +" submitted at "+data.time;
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
    return {result:result,blockStatusArray:blockStatusArray}
  } catch (error) {
    console.error('Error', error); 
  }
};

export {submitCode,runCode,fetchDescription,fetchResult}