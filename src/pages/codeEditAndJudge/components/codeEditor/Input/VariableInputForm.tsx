import { Paper } from '@mui/material';
import React, { useState } from 'react';

interface ArrayInputFormProps {
    type: string;
    text: string;
    setInput: any;
}

function VariableInputForm({ type, text, setInput }: ArrayInputFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setInput(value+"\n");
    };

    return (
        <Paper sx={{padding:'10px'}}>
            <label>{
            type=="int"?type+" "+text+" = "+inputValue+"":
            type=="string"?type+" "+text+" = \""+inputValue+"\"":
            "unknown type:"+type+" "+text
            }</label>
            <div style={{height:'5px'}}/>
            <input type="text" value={inputValue} onChange={handleChange} style={{width:'70px',height:'20px'}}/>
        </Paper>
    );
}

export default VariableInputForm;