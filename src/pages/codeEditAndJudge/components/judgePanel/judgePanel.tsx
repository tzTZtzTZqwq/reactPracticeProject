import JudgeStatsBlock from './block/block';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'
import { Grid2, Paper } from '@mui/material';

type JudgeStatsPanelProps = {
  blockStatusArray: any,
  result
}

function JudgeStatsPanel({ blockStatusArray ,result}: JudgeStatsPanelProps) {
  console.log(blockStatusArray.length)
  console.log(blockStatusArray)
  return (
    <div className="judgePanel-root">
      <Paper>
      <p>{result}</p>
      <Grid2 container spacing={6}>
      {blockStatusArray?.map((block, index) => (
        <Grid2 size={1}>
        <JudgeStatsBlock block={block} />
        </Grid2>
      ))}
 
      </Grid2>
      </Paper>
    </div>
  );
}

export default JudgeStatsPanel;
