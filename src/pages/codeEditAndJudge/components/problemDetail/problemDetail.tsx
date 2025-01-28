import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { store } from '../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Skeleton, Typography } from '@mui/material';
function Description(){
  const codeSnap = useSnapshot(store)
  if(codeSnap.problemDescription==''){
    return (
    <Skeleton variant="rectangular" width={'100%'} height={'80%'} />
    )
  }else{
    return(
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {codeSnap.problemDescription}
    </ReactMarkdown>)
  }
}
function ProblemDetail() {
  return (
    <div className="problemDetail-root">
      <Paper sx={{padding:'10px',overflow:'scroll',height:'60vh'}}>
        <Typography variant='h5'>
          two sum
        </Typography>
        <Description/>
      </Paper>
    </div>
  );
}

export default ProblemDetail;
