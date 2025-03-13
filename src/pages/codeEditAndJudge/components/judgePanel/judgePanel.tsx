import JudgeStatsBlock from './block/block';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'
import { Divider, Grid2, Paper } from '@mui/material';
import { useSnapshot } from 'valtio';
import { store } from '../../stores/code';

type JudgeStatsPanelProps = {
  blockStatusArray: any,
  result
}

function JudgeStatsPanel({ blockStatusArray ,result}: JudgeStatsPanelProps) {
  const codeSnap = useSnapshot(store);
  console.log(blockStatusArray[0]);
  return (
    <div className="judgePanel-root" >
      <Paper sx={{maxHeight:'25vh',overflow:'scroll'}}>
      <p>{result}</p>
      <Divider/>
        {blockStatusArray?.reduce((acc, block) => {
          const group = acc.find(g => g.resultGroup === block.resultGroup);
          if (group) {
            group.blocks.push(block);
          } else {
            acc.push({ resultGroup: block.resultGroup, blocks: [block] });
          }
          return acc;
        }, []).map((group, groupIndex) => (
          <div key={groupIndex}>
            <p style={{marginTop:'5px',marginBottom:'5px'}}>{group.resultGroup}</p>
            <Divider/>
            <div style={{display:'flex'}}>
            {group.blocks.map((block, blockIndex) => (
            <div>
              <JudgeStatsBlock block={block} />
            </div>
          ))}
            </div>
          </div>
        ))}
      </Paper>
      </div>
  );
}

export default JudgeStatsPanel;
