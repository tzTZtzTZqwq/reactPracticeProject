import * as React from 'react';
import './block.css';
import {blockStatusEnum,blockStatus,blockColorArr,blockStatusArr} from '@/defines/judgeDefines'

type judgestatsBlockProps = {
  block:blockStatus
}
function JudgeStatsBlock({block} : judgestatsBlockProps){
  //block);
  return (
    
    <div className="judgePanel-Block-root" style={{ backgroundColor: blockColorArr[block.status] }}>
      <p className="judgePanel-Block-indexText">{blockStatusArr[block.status]}</p>
      <p className="judgePanel-Block-timeText">{block.time}</p>
    </div>
  );
};

export default JudgeStatsBlock;
