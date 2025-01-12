import * as React from 'react';
import './judgePanel.css';
import JudgeStatsBlock from './block/block';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'

type JudgeStatsPanelProps = {
  blockStatusArray?: blockStatus[],
  result
}

function JudgeStatsPanel({ blockStatusArray ,result}: JudgeStatsPanelProps) {
  return (
    <div className="judgePanel-root">
      <p>{result}</p>
      <div className="judgePanel-contianer">
      {blockStatusArray?.map((block, index) => (
        <JudgeStatsBlock block={block} />
      ))}
      </div>
    </div>
  );
}

export default JudgeStatsPanel;
