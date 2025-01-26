import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { store } from '../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Typography } from '@mui/material';
function ProblemDetail() {
  const codeSnap = useSnapshot(store)
  return (
    <div className="problemDetail-root">
      <Paper sx={{padding:'10px'}}>
        <Typography variant='h5'>
          two sum
        </Typography>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {codeSnap.problemDescription}
        </ReactMarkdown>
      </Paper>
    </div>
  );
}

export default ProblemDetail;
