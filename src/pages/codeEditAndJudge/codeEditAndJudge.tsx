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
    const initialBlockStatusArray = Array.from({ length: "work in progress".length }, (_, index) => ({
      index: "work in progress".charAt(index),
      status: index % 2 === 0 ? blockStatusEnum.ACCEPTED : blockStatusEnum.PENDING
    }));
    setBlockStatusArray(initialBlockStatusArray);
    fetchDescription();
  }, []);

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
        <CodeEditor />
      </div>
      <div className="judgeStats-container">
        <JudgeStatsPanel blockStatusArray={blockStatusArray} />
      </div>
    </div>
  );
}

export default CodeEditAndJudge;
