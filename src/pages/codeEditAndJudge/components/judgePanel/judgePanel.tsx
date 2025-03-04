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
    <div className="judgePanel-root" style={{boxShadow: codeSnap.ifHoveringSubmitButton ? '0 0 10px #bbbbbb' : 'none', zIndex: codeSnap.ifHoveringSubmitButton ? 1 : 'auto'}}>
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
            <Grid2 container spacing={6}>
            {group.blocks.map((block, blockIndex) => (
            <Grid2 key={blockIndex} size={1}>
              <JudgeStatsBlock block={block} />
            </Grid2>
          ))}
            </Grid2>
          </div>
        ))}
      </Paper>
      </div>
  );
}

export default JudgeStatsPanel;
