import * as React from 'react';
import NavBar from '@/components/navBar/navBar';
import CodeEditor from './components/codeEditor/codeEditor';
import JudgeStatsPanel from './components/judgePanel/judgePanel';

import ProblemDetail from './components/problemDetail/problemDetail';
import { store,initializeData } from './stores/code'
import { useSnapshot } from 'valtio';
import { Grid2 } from '@mui/material';
import { green } from '@mui/material/colors';

function CodeEditAndJudge() {
  const codeSnap = useSnapshot(store);

  const [blockStatusArray, setBlockStatusArray] = React.useState([]);

  React.useEffect(() => {
    const initialBlockStatusArray = [];
    setBlockStatusArray(initialBlockStatusArray);
    initializeData();
  }, []);

  return (
    <div>
      <NavBar/>
      <Grid2 container>
        <Grid2 size={4}>
          <Grid2 container direction={'row'} sx={{margin:'15px',bgcolor:'#00ff00'}}>
            <Grid2 size={12}>
              <ProblemDetail/>
            </Grid2>
            <Grid2 size={4}>
              <JudgeStatsPanel blockStatusArray={[]} result={codeSnap.result} />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={8}>
          <CodeEditor/>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default CodeEditAndJudge;
