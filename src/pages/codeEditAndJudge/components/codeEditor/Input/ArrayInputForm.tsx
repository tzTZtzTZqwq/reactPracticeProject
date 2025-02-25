import { Paper } from '@mui/material';
import React, { useState } from 'react';

interface ArrayInputFormProps {
    type: string;
    text: string;
    setInput: any;
}

function ArrayInputForm({ type,text, setInput }: ArrayInputFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const commaCount = (value.match(/,/g) || []).length + 1;
        setInput(commaCount + "\n" + value.split(',').join('\n') + '\n');
    };

    return (
        <Paper sx={{padding:'10px'}}>
            <label>
            {
            type === "int[]" ? type+" "+text+" = {"+inputValue+"}" :
            type=="string[]"?type+" "+`${text} = {${inputValue.split(',').map(item => `"${item.trim()}"`).join(',')}}`:
            "unknown type:"+type+" "+text
            }</label>
            <div style={{height:'5px'}}/>
            <input type="text" value={inputValue} onChange={handleChange} style={{width:'90%',height:'20px'}}/>
        </Paper>
    );
}

export default ArrayInputForm;