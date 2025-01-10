import * as React from 'react';
import CodeEditAndJudge from './pages/codeEditAndJudge/codeEditAndJudge'
import CodeEditor from '@/components/codeEditor/codeEditor'
import JudgeStatsPanel from '@/components/judgePanel/judgePanel'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-codeEditor">
        <CodeEditAndJudge/>
      </div>
    </div>
  );
}

export default App;
