import * as React from 'react';
import CodeMirror, { Panel } from '@uiw/react-codemirror';
import "./Input.css"
import { showPanel, EditorView } from '@codemirror/view';
import { store } from '../../../stores/code'
import { useSnapshot } from 'valtio';
import { Button, Divider, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import InputLine from './InputLine';

function CodeInput() {
  const [showCodeMirror, setShowCodeMirror] = React.useState(true);
  const codeSnap = useSnapshot(store);
  const [codeMirrorValue, setCodeMirrorValue] = React.useState(codeSnap.input);
  const [rows, setRows] = React.useState([]);
  const onChange = React.useCallback((value: string) => {
    store.input = value;
  }, []);

  const handleAddRow = () => {
    setRows([...rows, { name: '', func: '', params: '' }]);
  };

  const handleDeleteRow = (index: number) => {
    const newRows = rows.filter((_, i) => i !== index);
    store.inputFormResultArray = newRows;
    setRows(newRows);
  };

  const handleFunctionChange = (index: number, value: string) => {
    const newRows = rows.map((row, i) => i === index ? { ...row, func: value } : row);
    store.inputFormResultArray = newRows;
    setRows(newRows);
  };

  const handleParamsChange = (index: number, value: string) => {
    const newRows = rows.map((row, i) => i === index ? { ...row, param: value } : row);
    store.inputFormResultArray = newRows;
    setRows(newRows);
  };

  React.useEffect(() => {
    setCodeMirrorValue(codeSnap.input);
    const newRows = codeSnap.inputFormResultArray.map(element => ({
      name: element.name,
      func: element.func,
      param: element.param
    }));
    setRows(newRows);
  }, [codeSnap.inputFormResultArray]);

  return (
    <div className="codeEditor-Input-root" style={{ backgroundColor: 'white', overflow: 'scroll', padding: '5px' }}>
      <div style={{ fontSize: '15px', marginTop: '10px' }}>
        <span>可用函数:  </span>
        {codeSnap.inputForm.form.map((item, index) => (
          <span key={index}>{item.name + ",  "}</span>
        ))}
      </div>
      <Table sx={{ minWidth: '400px', width: '80%' }}>
        <TableBody>
          <TableRow key={-1} sx={{ height: '30px' }}>
            <TableCell sx={{ width: '40%', padding: '2px' }}>
              调用函数
            </TableCell>
            <TableCell sx={{ width: 'auto', padding: '2px' }}>
              参数
            </TableCell>
            <TableCell sx={{ width: '50px', padding: '2px' }}>
              删除
            </TableCell>
          </TableRow>
          {rows.map((row, index) => {
            return(
            <InputLine
              key={index}
              index={index}
              handleFunctionChange={handleFunctionChange}
              handleParamsChange={handleParamsChange}
              handleDeleteRow={handleDeleteRow}
              initialFunc={row.func}
              initialParams={row.param}
            />)
          })}
        </TableBody>
      </Table>
      <Button onClick={handleAddRow} variant="contained" color="primary" sx={{ margin: '5px' }}>+</Button>
    </div>
  );
}

export default CodeInput;