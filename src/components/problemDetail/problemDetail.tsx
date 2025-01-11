import * as React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './problemDetail.css';

type problemDetailProps = {
  markdownContent: string;
}

function ProblemDetail({ markdownContent }: problemDetailProps) {
  return (
    <div className="problemDetail-root">
        <h3 className='problemDetail-title'>two sum</h3>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
        >
          {markdownContent}
        </ReactMarkdown>
    </div>
  );
}

export default ProblemDetail;
