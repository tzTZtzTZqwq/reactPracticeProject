import { java } from "@codemirror/lang-java";
import { Button, Grid2 } from "@mui/material";
import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import { runCode } from "@/apis/problem";

async function runCodeS(){
}

function MinicodeConsole(code){
    const [ifEnable,setIfEnable] = React.useState(false)
    const [input,setInput] = React.useState("")
    const [output,setOutput] = React.useState("")
    if(ifEnable){return(
    <div>
    <Button onClick={async ()=>{
        setOutput('Your code has been submitted at '+new Date().toLocaleTimeString()+'. Please wait.')
        setOutput(await runCode(code,input))

    }}>run code</Button>
    <Grid2 container>
        <Grid2 size={6}>
        <ReactCodeMirror
            value={input}
            onChange={(input)=>{setInput(input)}}
            extensions={[
                java()
            ]}
        />
        </Grid2>
        <Grid2 size={6}>
        <ReactCodeMirror
            value={output}
            extensions={[
                java()
            ]}
        />
        </Grid2>
    </Grid2>
    </div>
    )}else{
        return(
            <Button onClick={()=>{setIfEnable(!ifEnable)}}>try it</Button>
        )
    }
}

function MinicodeEditor({Icode}){
    const [code,setCode] = React.useState(Icode)
    return(
        <div>
            <ReactCodeMirror
                onChange={(code)=>{setCode(code)}}
                value={code}
                extensions={[
                    java()
                ]}
            />
            {MinicodeConsole(code)}
        </div>
    )
}

export default MinicodeEditor;