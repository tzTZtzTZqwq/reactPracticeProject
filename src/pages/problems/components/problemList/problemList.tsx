import { Paper, Button, Select, MenuItem, OutlinedInput, InputLabel, FormControl, SelectChangeEvent, Box, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getProblemList } from '@/apis/problem';
import { useEffect, useState } from 'react';
import { Link } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WidthFull } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React from 'react';
import { color } from '@uiw/react-codemirror';

function ProblemList() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function fetchProblems() {
            const response = await getProblemList();
            if (response.status === "0") {
                setProblems(response.problems);
            }
        }
        fetchProblems();
    }, []);

    const columns = [
        { field: 'problem_index', headerName: 'ID', flex: 1  },
        { field: 'title', headerName: 'NAME', flex: 1  },
        { field: 'tags', headerName: 'TAGS', flex: 1 },
        {
            field: 'action',
            headerName: '',
            renderCell: (params) => (
                <Link to={'/attempt/' + params.row.problem_index}>
                    <Button sx={{ height: '40px'}}>
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            )
        }
    ];

    const difficulties = [
        {name:'easy',color:'#76ea3e'},
        {name:'medium',color:'#faee06'},
        {name:'hard',color:'#f24d33'},
        {name:'\"I THINK IT\'S EASY\"',color:'#802b1d'},
    ];

    const knowledgePoints = [
        {name:'Iteration/Loop - 遍历/循环',color:'red'},
        {name:'String - 字符串',color:'red'},
        {name:'1DArray - 数组',color:'green'},
        {name:'2DArray - 二维数组',color:'green'},
        {name:'ArrayList - 动态数组',color:'yellow'},
        {name:'Sorting - 排序',color:'yellow'},
    ];

    const [selectedDifficulties, setSelectedDifficulties] = React.useState<string[]>([]);
    const [selectedKnowledgePoints, setSelectedKnowledgePoints] = React.useState<string[]>([]);

    const handleChangeDifficulties = (event: SelectChangeEvent<typeof selectedDifficulties>) => {
        const {
          target: { value },
        } = event;
        setSelectedDifficulties(
          typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    const handleChangeKnowledgePoints = (event: SelectChangeEvent<typeof selectedKnowledgePoints>) => {
        const {
          target: { value },
        } = event;
        setSelectedKnowledgePoints(
          typeof value === 'string' ? value.split(',') : value,
        );
    };
      
    return (
        <div className="problems-problemList-root" style={{ height: 400, padding: '15px' }}>
            <Paper sx={{ width: '100%', height: '70px',marginBottom:'10px',alignItems:'center',display:'flex' }}>
                <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">难度 - Difficulties</InputLabel>
                <Select
                multiple
                input={<OutlinedInput label="Name" />}
                onChange={handleChangeDifficulties}
                value={selectedDifficulties}
                sx={{width:'300px',height:'60px'}}
                renderValue={(selectedTags) => (
                    <Box sx={{ display: 'flex', gap: 0.5, overflow: 'scroll' }}>
                        {selectedTags.map((value) => {
                        const difficulty = difficulties.find(d => d.name === value);
                        return (
                            <Chip key={value} label={value} sx={{ backgroundColor: difficulty?.color }} />
                        );
                        })}
                    </Box>
                    )}
                >
                {difficulties.map((diffculty) => (
                    <MenuItem
                    key={diffculty.name}
                    value={diffculty.name}
                    >
                    {diffculty.name}
                    </MenuItem>
                ))}
                </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">类型 - Types</InputLabel>
                <Select
                multiple
                input={<OutlinedInput label="Name" />}
                onChange={handleChangeKnowledgePoints}
                value={selectedKnowledgePoints}
                sx={{width:'300px',height:'60px'}}
                renderValue={(selectedTags) => (
                    <Box sx={{ display: 'flex', gap: 0.5, overflow: 'scroll' }}>
                        {selectedTags.map((value) => {
                        const difficulty = difficulties.find(d => d.name === value);
                        return (
                            <Chip key={value} label={value} sx={{ backgroundColor: difficulty?.color }} />
                        );
                        })}
                    </Box>
                    )}
                >
                {knowledgePoints.map((diffculty) => (
                    <MenuItem
                    key={diffculty.name}
                    value={diffculty.name}
                    >
                    {diffculty.name}
                    </MenuItem>
                ))}
                </Select>
                </FormControl>

            </Paper>
            <Paper sx={{ width: '100%', display: 'flex' }}>
                <DataGrid
                    rows={problems}
                    columns={columns}
                    getRowId={(row) => row.problem_index}
                />
            </Paper>
            
        </div>
    );
}

export default ProblemList;
