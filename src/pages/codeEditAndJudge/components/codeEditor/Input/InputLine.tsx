import { TableRow, TableCell, Select, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnapshot } from "valtio";
import { store } from '../../../stores/code'

function InputLine({index, handleFunctionChange, handleDeleteRow, handleParamsChange, initialFunc, initialParams}){
    const codeSnap = useSnapshot(store);
    console.log(initialParams);
    return(
        <TableRow key={index} sx={{height:'30px'}}>
            <TableCell sx={{width:'40%',padding:'2px'}}>
            <Select
                fullWidth
                sx={{height:'25px',fontSize:'15px'}}
                value={initialFunc}
                onChange={(e) => handleFunctionChange(index, e.target.value)}
            >
                {codeSnap.inputForm.form.map((item, idx) => (
                    <MenuItem key={idx} value={item.func}>{item.name}</MenuItem>
                ))}
            </Select>
            </TableCell>
            <TableCell sx={{width:'auto',padding:'2px'}}>
            <input 
                style={{width:'90%',height:'20px'}} 
                value={initialParams} 
                onChange={(e) => handleParamsChange(index, e.target.value)}
            />
            </TableCell>
            <TableCell sx={{width:'50px',padding:'2px'}}>
            <IconButton onClick={() => handleDeleteRow(index)}>
                <DeleteIcon />
            </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default InputLine;