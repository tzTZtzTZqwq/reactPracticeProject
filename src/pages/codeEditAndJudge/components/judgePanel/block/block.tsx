import * as React from 'react';
import './block.css';
import {blockStatusEnum,blockStatus,blockColorArr,blockStatusArr, blockDescription} from '@/defines/judgeDefines'
import { Tooltip } from '@mui/material';

type judgestatsBlockProps = {
  block:blockStatus
}
function JudgeStatsBlock({block} : judgestatsBlockProps){
  return (
    <Tooltip title={blockDescription[block.status]} arrow>
    <div className="judgePanel-Block-root" style={{ backgroundColor: blockColorArr[block.status] }}>
      <p className="judgePanel-Block-indexText">{blockStatusArr[block.status]}</p>
      <p className="judgePanel-Block-timeText">{block.time}</p>
    </div>
    </Tooltip>
  );
};

export default JudgeStatsBlock;
