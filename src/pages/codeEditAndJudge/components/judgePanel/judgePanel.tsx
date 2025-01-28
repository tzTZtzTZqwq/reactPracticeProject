import JudgeStatsBlock from './block/block';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'
import { Paper } from '@mui/material';

type JudgeStatsPanelProps = {
  blockStatusArray?: blockStatus[],
  result
}

function JudgeStatsPanel({ blockStatusArray ,result}: JudgeStatsPanelProps) {
  return (
    <div className="judgePanel-root">
      <Paper>
      <p>{result}</p>
      <div className="judgePanel-contianer">
      {blockStatusArray?.map((block, index) => (
        <JudgeStatsBlock block={block} />
      ))}
 
      </div>
      </Paper>
    </div>
  );
}

export default JudgeStatsPanel;
