import * as React from 'react';
import './block.css';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'

type judgestatsBlockProps = {
  block:blockStatus
}
function JudgeStatsBlock({block} : judgestatsBlockProps){
  return (
    <div className="judgePanel-Block-root" style={{ backgroundColor: block.status }}>
      <p className="judgePanel-Block-indexText">{block.index}</p>
      <p className="judgePanel-Block-timeText">{block.time}</p>
    </div>
  );
};

export default JudgeStatsBlock;
