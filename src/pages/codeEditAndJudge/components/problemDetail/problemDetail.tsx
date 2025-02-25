import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { store } from '../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Skeleton, Typography } from '@mui/material';
import '@/styles/githubLightCss.css'
import { ClassNames } from '@emotion/react';
function Description(){
  const codeSnap = useSnapshot(store)
  if(codeSnap.problemDescription==''){
    return (
    <Skeleton variant="rectangular" width={'100%'} height={'80%'} />
    )
  }else{
    return(
    <ReactMarkdown remarkPlugins={[remarkGfm]} children={codeSnap.problemDescription} className='markdown-body'/>
    )
  }
}
function ProblemDetail() {
  const codeSnap = useSnapshot(store)
  return (
    <div className="problemDetail-root">
      <Paper sx={{padding:'10px',overflow:'scroll',height:'60vh'}}>
        <Typography variant='h5'>
          {codeSnap.problemName}
        </Typography>
        <Description/>
      </Paper>
    </div>
  );
}

export default ProblemDetail;
