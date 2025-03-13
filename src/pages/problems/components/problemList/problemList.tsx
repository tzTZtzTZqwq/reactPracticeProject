import React from 'react';
import { Paper, Button, Select, MenuItem, OutlinedInput, InputLabel, FormControl, SelectChangeEvent, Box, Chip, Typography, CircularProgress } from '@mui/material';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import { getProblemList } from '@/apis/problem';
import { useEffect, useState } from 'react';
import { Link } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function CircularProgressWithLabel({ value, ...props }: { value: string, [key: string]: any }) {
    const [numerator, denominator] = value.split('/').map(Number);
    console.log(numerator)
    const progress = value==""?0:((numerator / denominator) * 100>5?(numerator / denominator) * 100:5)
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} sx={{marginTop:'auto',marginBottom:'auto',color:progress==100?'green':(progress>20?'orange':'red'),display:progress==0?'none':''}} size={30}  />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        <p>{value}</p>
        </Box>
      </Box>
    );
}
  
function ProblemList() {
    const [problems, setProblems] = useState([]);
    const [filteredProblems, setFilteredProblems] = useState([]);
    const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
    const [selectedKnowledgePoints, setSelectedKnowledgePoints] = useState<string[]>([]);

    useEffect(() => {
        async function fetchProblems() {
            const response = await getProblemList();
            if (response.status === "0") {
                setProblems(response.problems);
                filterProblems(response.problems);
            }
        }
        fetchProblems();
    }, []);

    useEffect(() => {
        filterProblems(problems);
    }, [selectedDifficulties, selectedKnowledgePoints]);

    const filterProblems = (problems) => {
        const filtered = problems.filter(problem => {
            const tags = JSON.parse(problem.tags).tags;
            console.log(selectedDifficulties);
            console.log(tags);
            const matchesDifficulty = selectedDifficulties.length === 0 || tags.some(tag => selectedDifficulties.includes(tag));
            const matchesKnowledgePoint = selectedKnowledgePoints.length === 0 || tags.some(tag => selectedKnowledgePoints.includes(tag));
            return matchesDifficulty && matchesKnowledgePoint;
        });
        setFilteredProblems(filtered);
    };

    const columns = [
        { field: 'problem_index', headerName: 'ID', width: 100 },
        { field: 'title', headerName: 'NAME', flex: 1,
            renderCell: (params) => {
                console.log(params)
                return(
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Link to={'/attempt/' + params.row.problem_index} style={{ 
                        textDecoration: 'none',
                        color: 'black',
                    }}>
                        {params.row.id}
                    </Link>
                    <CircularProgressWithLabel value={params.row.result} />

                </div>
                )
            }
        },
        { field: 'tags', headerName: 'TAGS', flex: 1,
            renderCell: (params) => {
                const tags = JSON.parse(params.value).tags;
                return (
                    <Box sx={{ display: 'block', gap: 0.5 }}>
                        {tags.map((tag) => {
                            const difficulty = difficulties.find(d => d.id === tag);
                            const knowledgePoint = knowledgePoints.find(k => k.id === tag);
                            const color = difficulty?.color || knowledgePoint?.color || 'grey';
                            const label = difficulty?.name || knowledgePoint?.name || tag;
                            return (
                                <Chip key={tag} label={label} sx={{ backgroundColor: color, marginTop: 'auto', marginBottom: 'auto', marginRight: '3px', fontSize: '10px' }} />
                            );
                        })}
                    </Box>
                );
            }
        },
        {
            field: 'action',
            headerName: '',
            renderCell: (params) => (
                <Link to={'/attempt/' + params.row.problem_index}>
                    <Button variant="contained" sx={{ height: '40px', backgroundColor:'#4484c3' }}>
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            )
        }
    ];

    const difficulties = [
        { id: 'eazy', name: 'easy - 简单', color: '#76ea3e' },
        { id: 'medium', name: 'medium - 中等', color: '#faee06' },
        { id: 'hard', name: 'hard - 困难', color: '#f24d33' },
        { id: 'EZ', name: '\"I THINK IT\'S EASY\"', color: '#802b1d' },
    ];

    const knowledgePoints = [
        { id: 'AP', name: 'AP', color: 'rgb(240, 209, 209)' },
        { id: 'iteration', name: 'Iteration/Loop - 遍历/循环', color: 'rgb(219, 219, 219)' },
        { id: 'string', name: 'String - 字符串', color: 'rgb(219, 219, 219)' },
        { id: 'array', name: '1DArray - 数组', color: 'rgb(219, 219, 219)' },
        { id: '2Darray', name: '2DArray - 二维数组', color: 'rgb(219, 219, 219)' },
        { id: 'arrayList', name: 'ArrayList - 动态数组', color: 'rgb(219, 219, 219)' },
        { id: 'sorting', name: 'Sorting - 排序', color: 'rgb(219, 219, 219)' },
    ];

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
        <div className="problems-problemList-root" style={{ height: 400, padding: '10px',minHeight:'800px' }}>
            <Paper sx={{ width: '100%', height: '70px', marginBottom: '10px', alignItems: 'center', display: 'flex' }}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">难度 - Difficulties</InputLabel>
                    <Select
                        multiple
                        input={<OutlinedInput label="Name" />}
                        onChange={handleChangeDifficulties}
                        value={selectedDifficulties}
                        sx={{ width: '300px', height: '60px' }}
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
                                key={diffculty.id}
                                value={diffculty.id}
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
                        sx={{ width: '300px', height: '60px' }}
                        renderValue={(selectedTags) => (
                            <Box sx={{ display: 'flex', gap: 0.5, overflow: 'scroll' }}>
                                {selectedTags.map((value) => {
                                    const knowledgePoint = knowledgePoints.find(k => k.name === value);
                                    return (
                                        <Chip key={value} label={value} sx={{ backgroundColor: knowledgePoint?.color }} />
                                    );
                                })}
                            </Box>
                        )}
                    >
                        {knowledgePoints.map((knowledgePoint) => (
                            <MenuItem
                                key={knowledgePoint.id}
                                value={knowledgePoint.id}
                            >
                                {knowledgePoint.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>
            <Paper sx={{ width: '100%', display: 'flex' }}>
                <DataGrid
                    rows={filteredProblems}
                    columns={columns}
                    getRowId={(row) => row.problem_index}
                />
            </Paper>
        </div>
    );
}

export default ProblemList;
