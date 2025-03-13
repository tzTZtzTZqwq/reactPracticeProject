import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import CodeEditAndJudge from './pages/codeEditAndJudge/codeEditAndJudge';
import Problems from './pages/problems/problems';
import ProblemSets from './pages/problemSets/problemSets'
import ProblemSet from './pages/problemSet/problemSet'
import Account from './pages/account/account';
import Tasks from './pages/tasks/tasks';
import ManageMent from './pages/management/management';
import Tutorial from './pages/tutorial/tutorial';
import FrontPage from './pages/frontpage/frontpage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Problems />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/attempt/:id" element={<CodeEditAndJudge />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/problemsets" element={<ProblemSets />} />
      <Route path="/problemset/:id" element={<ProblemSet />} />
      <Route path="/account" element={<Account />} />
      <Route path="/management" element={<ManageMent />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/frontpage" element={<FrontPage />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

