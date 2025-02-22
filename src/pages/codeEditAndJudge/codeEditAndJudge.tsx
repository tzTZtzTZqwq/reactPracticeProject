import * as React from 'react';
import { useParams } from 'react-router';
import NavBar from '@/components/navBar/navBar';
import CodeEditor from './components/codeEditor/codeEditor';
import JudgeStatsPanel from './components/judgePanel/judgePanel';
import ProblemDetail from './components/problemDetail/problemDetail';
import { store, initializeData } from './stores/code';
import { useSnapshot } from 'valtio';
import { Grid2, Stack } from '@mui/material';
import { green } from '@mui/material/colors';

function CodeEditAndJudge() {
  const { id } = useParams<{ id: string }>();
  const codeSnap = useSnapshot(store);

  const [blockStatusArray, setBlockStatusArray] = React.useState([]);

  React.useEffect(() => {
    const initialBlockStatusArray = [];
    setBlockStatusArray(initialBlockStatusArray);
    initializeData(id);
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', margin: '15px', marginRight: '0px' }}>
          <ProblemDetail />
          <JudgeStatsPanel blockStatusArray={codeSnap.blockResultArray} result={codeSnap.result} />
        </div>
        <div style={{ width: '70%' }}>
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}

export default CodeEditAndJudge;
