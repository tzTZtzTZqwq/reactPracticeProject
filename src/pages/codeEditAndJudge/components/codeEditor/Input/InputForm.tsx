import { useState } from "react";
import ArrayInputForm from "./ArrayInputForm";
import VariableInputForm from "./VariableInputForm";
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';

function InputForm(){
    const codeSnap = useSnapshot(store);
    const inputForm = codeSnap.inputForm;

    const [inputValues, setInputValues] = useState<string[]>(new Array(inputForm.length).fill(''));

    const handleInputChange = (index: number, value: string) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
        store.input = newInputValues.join('');
    };

    return (
        <div style={{ backgroundColor: 'aliceblue', padding: '5px', height: '100%', overflow: 'scroll' }}>
            {inputForm.map((input, index) => (
                <div key={index} style={{ marginBottom: '3px' }}>
                    {input.type.includes('[]') ? (
                        <ArrayInputForm 
                            type={input.type} 
                            text={input.text} 
                            setInput={(value: string) => handleInputChange(index, value)} 
                        />
                    ) : (
                        <VariableInputForm 
                            type={input.type} 
                            text={input.text} 
                            setInput={(value: string) => handleInputChange(index, value)} 
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default InputForm;