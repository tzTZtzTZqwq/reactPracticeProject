import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { store } from '../../stores/code'
import { useSnapshot } from 'valtio';
import { Paper, Skeleton, Typography } from '@mui/material';
import '@/styles/githubLightCss.css'
import { ClassNames } from '@emotion/react';
import remarkBreaks from 'remark-breaks'
function Description(){
  const codeSnap = useSnapshot(store)
  if(codeSnap.problemDescription==''){
    return (
    <Skeleton variant="rectangular" width={'100%'} height={'100%'}/>
    )
  }else{
    return(
    <ReactMarkdown 
      remarkPlugins={[remarkGfm,remarkBreaks]} 
      children={codeSnap.problemDescription} 
      className='markdown-body' 
      components={{
      p: ({node, ...props}) => <p style={{ fontSize: '14px' }} {...props} />,
      tr: ({node, ...props}) => <tr style={{ fontSize: '10px' }} {...props} />,
      td: ({node, ...props}) => <td style={{ fontSize: '10px' }} {...props} />,
      code: ({node, ...props}) => <code style={{ fontSize: '10px' }} {...props} />
      }}
    />
    )
  }
}
function ProblemDetail() {
  const codeSnap = useSnapshot(store)
  return (
    <Paper sx={{padding:'10px',overflow:'scroll',height:'100%',margin:'10px',marginRight:'0px'}}>
      <Typography variant='h5'>
        {codeSnap.problemName}
      </Typography>
      <Description/>
    </Paper>
  );
}

export default ProblemDetail;
