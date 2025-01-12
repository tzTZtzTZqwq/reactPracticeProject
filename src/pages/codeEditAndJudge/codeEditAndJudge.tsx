import * as React from 'react';
import CodeEditor from '@/components/codeEditor/codeEditor';
import JudgeStatsPanel from '@/components/judgePanel/judgePanel';
import ProblemList from '@/components/problemList/problemList';
import ProblemDetail from '@/components/problemDetail/problemDetail';
import './codeEditAndJudge.css';
import { blockStatus, blockStatusEnum } from '@/defines/judgeDefines';

function CodeEditAndJudge() {
  const [blockStatusArray, setBlockStatusArray] = React.useState([]);
  const [viewToggle, setViewToggle] = React.useState(0);
  const [md, setMd] = React.useState('');
  const [result,setResult] = React.useState('')

  React.useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await fetch('https://java.tonyz.top/program/getProblem.php');
        const data = await response.json();
        setMd(data.description);
      } catch (error) {
        console.error('Error fetching description:', error);
      }
    };
    const initialBlockStatusArray = [];
    setBlockStatusArray(initialBlockStatusArray);
    fetchDescription();
    refreshResult();
  }, []);

  const refreshResult = async () => {
    try {
      const response = await fetch('https://java.tonyz.top/program/getJudgeResult.php', {
        method: 'GET',
      });
      const data = await response.json();
      
      if(result == null){
        setResult("You havent submit any code yet");
        return;
      }
      setResult(data.result_description +" submitted at "+data.time);
      const resultArray = JSON.parse(data.result);
      setBlockStatusArray(Array.from({ length: resultArray.length }, (_, index) => ({
        status: resultArray[index]['status'] === 0 ? blockStatusEnum.ACCEPTED : 
        resultArray[index]['status'] === 1 ? blockStatusEnum.UNKNOWN : 
        resultArray[index]['status'] === 5 ? blockStatusEnum.TIMELIMIT : 
        resultArray[index]['status'] === 6 ? blockStatusEnum.MEMORYLIMIT : 
        resultArray[index]['status'] === 7 ? blockStatusEnum.WRONGANSWER :
                blockStatusEnum.UNKNOWN,
        time: (resultArray[index]['timeOutput'] * 1000) + "ms"
      })));
    } catch (error) {
      console.error('Error', error); 
    }
  };

  return (
    <div className="codeEditAndJudge-root">
      <div className="problemListDetail-container">
        <div className="problemList-container">
          {viewToggle == 1 && <ProblemList />} {/* Show ProblemList when viewToggle is 1 */}
        </div>
        <div className="problemDetail-container">
          {viewToggle !== 1 && <ProblemDetail markdownContent={md} />} {/* Show ProblemDetail when viewToggle is not 1 */}
        </div>
        <ProblemList />
      </div>
      <div className="codeEditor-container">
        <CodeEditor refresh={refreshResult}/>
      </div>
      <div className="judgeStats-container">
        <JudgeStatsPanel blockStatusArray={blockStatusArray} result={result} />
      </div>
    </div>
  );
}

export default CodeEditAndJudge;
