import * as React from 'react';
import CodeEditor from '@/components/codeEditor/codeEditor';
import JudgeStatsPanel from '@/components/judgePanel/judgePanel';
import ProblemList from '@/components/problemList/problemList';
import './codeEditAndJudge.css';
import { blockStatus,blockStatusEnum } from '@/defines/judgeDefines';


function CodeEditAndJudge() {
  const[blockStatusArray,setBlockStatusArray] = React.useState([]);
  
  React.useEffect(() => {
    
    const initialBlockStatusArray = Array.from({ length: "work in progress".length }, (_, index) => ({
      index:"work in progress".charAt(index),
      status:index % 2 === 0 ? blockStatusEnum.ACCEPTED : blockStatusEnum.PENDING
    }));
    setBlockStatusArray(initialBlockStatusArray);
  }, []);

  return (
    <div className="codeEditAndJudge-root">
      <div className="problemList-container">
        <ProblemList/>
      </div>
      <div className="codeEditor-container">
        <CodeEditor/>
      </div>
      <div className="judgeStats-container">
        <JudgeStatsPanel blockStatusArray={blockStatusArray} />
      </div>
    </div>
  );
}

export default CodeEditAndJudge;
