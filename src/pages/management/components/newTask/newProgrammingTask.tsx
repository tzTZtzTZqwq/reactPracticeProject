import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Approval, ConfirmationNumber, ConfirmationNumberOutlined, ThumbUp, Upload } from "@mui/icons-material"
import { Button, ButtonGroup, Container, Grid, Grid2, Paper, TextField } from "@mui/material"
import '@/styles/omniMarkdownCss.css'

const HWTypes = {
    programming: 'programming HW',
    collecting: 'collecting HW'
}
const NewProgrammingTask: React.FC = () => {
    const [markdownText, setMarkdownText] = useState<string>('');
    const [selectedHWType, setSelectedHWType] = useState<string>(HWTypes.programming);
    return(
        <div style={{height:"500px",display:"flex",zIndex:10}}>
            <Paper sx={{width:'100%',padding:'15px'}}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button onClick={()=>{setSelectedHWType(HWTypes.programming)}} variant={selectedHWType === HWTypes.programming ? "contained" : "outlined"}>programming HW</Button>
                        <Button onClick={()=>{setSelectedHWType(HWTypes.collecting)}} variant={selectedHWType === HWTypes.collecting ? "contained" : "outlined"}>collecting HW</Button>
                    </ButtonGroup>
                    <p style={{fontSize:'10px'}}>
                    {selectedHWType === HWTypes.programming
                        ? "student will submit a program and it will be automatically graded by the test file"
                        : "student will upload a file with designed fromat and the teacher will manually grade it"}
                    </p>
                    <Grid2 container spacing={2}>
                        <Grid2 size={6}>
                        <TextField id="outlined-helperText" label="Name of the assignment" sx={{width:'100%',marginBottom:'10px'}}></TextField>
                        </Grid2>
                        <Grid2 size={2}>
                        <Button sx={{width:'100%',padding:'0'}} variant="contained" disabled={selectedHWType !== HWTypes.programming}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{fontSize:'10px'}}>upload test file</p>
                                <Upload style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                            </div>
                        </Button>
                        </Grid2>
                        <Grid2 size={2}>
                        <Button sx={{width:'100%',padding:'0'}} variant="contained" disabled={selectedHWType !== HWTypes.programming}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{fontSize:'10px'}}>upload sample answer</p>
                                <Upload style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                            </div>
                        </Button>
                        </Grid2>
                        <Grid2 size={2}>
                        <Button sx={{width:'100%',padding:'0'}} variant="contained">
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{fontSize:'10px'}}>confirm</p>
                                <Approval/>
                            </div>
                        </Button>
                        </Grid2>
                    </Grid2>
                    <div style={{display:'flex',gap:'10px', height: '350px'}}>
                        <textarea
                            style={{ width: '50%', resize: 'none' }}
                            value={markdownText}
                            onChange={(e) => setMarkdownText(e.target.value)}
                            placeholder="description"
                        />
                        <div style={{ width: '50%', padding: '10px', overflow: 'scroll', border: '1px solid black',borderRadius:'3px'}}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdownText} className='markdownCss'/>
                        </div>
                    </div>
            </Paper>
            
        </div>
    )
}

export default NewProgrammingTask