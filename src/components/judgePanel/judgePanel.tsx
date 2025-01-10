import * as React from 'react';
import './judgePanel.css';
import JudgeStatsBlock from './block/block';
import type {blockStatusEnum,blockStatus} from '@/defines/judgeDefines'

type JudgeStatsPanelProps = {
  blockStatusArray?: blockStatus[]
}

function JudgeStatsPanel({ blockStatusArray }: JudgeStatsPanelProps) {
  return (
    <div className="judgePanel-root">
      <div className="judgePanel-contianer">
      {blockStatusArray?.map((block, index) => (
        <JudgeStatsBlock block={block} />
      ))}
      </div>
    </div>
  );
}

export default JudgeStatsPanel;
