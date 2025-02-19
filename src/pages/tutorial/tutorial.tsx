import * as React from 'react';
import NavBar from '@/components/navBar/navBar';
import { RichTreeView, TreeViewBaseItem } from '@mui/x-tree-view';
import { ExpandMore, ChevronRight, Pages, ArrowForwardIosOutlined } from '@mui/icons-material';
import { Box, Button, Container, Grid2, Paper, TextField } from '@mui/material';
import ReactMarkdown, { Components } from "react-markdown";
import {getTutorial} from '@/apis/tutorial';
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import '@/styles/githubLightCss.css';

function Tutorial() {
  const [selectedLabel, setSelectedLabel] = React.useState('title');
  const [value, setValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedNodes, setExpandedNodes] = React.useState<string[]>([]);
  const [highlightedNode, setHighlightedNode] = React.useState<string | null>(null);
  const [markdownText, setMarkdownText] = React.useState('aaa');

  const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
    {
      id: 'u0',
      label: '0 - Introduction',
      children: [
      { id: 'd0-1', label: '0.1 Introduction' },
      { id: 'd0-2', label: '0.2 About a Java program' },
      { id: 'd0-3', label: '@mui/x-data-grid-premium' },
      ],
    },
    {
      id: 'u1',
      label: '1 - Primitive Data Types and Arithmetic Expressions',
      children: [
      { id: 'd1-1', label: '1.1 Declaring and changing variables in Java' },
      { id: 'd1-2', label: '1.2 Primitive Data Types in Java' },
      { id: 'd1-3', label: '1.3 Arithmetic Operators and Expressions' },
      { id: 'd1-4', label: '1.4 Data Conversion' },
      ],
    },
    {
      id: 'charts',
      label: 'Charts',
      children: [{ id: 'charts-community', label: '@mui/x-charts' }],
    },
    {
      id: 'tree-view',
      label: 'Tree View',
      children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
    },
    ];
    
    const handleSelect = async (event: React.SyntheticEvent, nodeId) => {
      const selectedItem = findItemById(MUI_X_PRODUCTS, nodeId);
      setExpandedNodes((prevExpandedNodes) => 
        prevExpandedNodes.includes(nodeId) 
          ? prevExpandedNodes.filter(id => id !== nodeId) 
          : [...prevExpandedNodes, nodeId]
      );
      
      if (selectedItem && nodeId.includes('d')) {
        setSelectedLabel(selectedItem.label);
        console.log(markdownText);
        setMarkdownText(await getTutorial(nodeId));
        console.log(markdownText);
      }
    };

  const findItemById = (items: TreeViewBaseItem[], id: string): TreeViewBaseItem | undefined => {
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const found = findItemById(item.children, id);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const matchedNodes = searchTree(MUI_X_PRODUCTS, query);
      console.log(matchedNodes);
      if (matchedNodes) {
        setExpandedNodes(matchedNodes.map((node) => getAllParentIds(MUI_X_PRODUCTS, node.id)).flat());
        //setHighlightedNode(matchedNode.id);
      } else {
        setExpandedNodes([]);
        setHighlightedNode(null);
      }
    } else {
      setExpandedNodes([]);
      setHighlightedNode(null);
    }
  };

  const searchTree = (items: TreeViewBaseItem[], query: string): TreeViewBaseItem[] | null => {
    var results: TreeViewBaseItem[] = [];
    items.forEach((unit) => {
      unit.children.forEach((item) => {
        if (item.label.toLowerCase().includes(query.toLowerCase())) {
          results.push(item);
        }
      })
    })
    return results.length > 0 ? results : null;
  };

  const getAllParentIds = (items: TreeViewBaseItem[], id: string, parents: string[] = []): string[] => {
    for (const item of items) {
      if (item.id === id) {
        return parents;
      }
      if (item.children) {
        const found = getAllParentIds(item.children, id, [...parents, item.id]);
        if (found.length) {
          return found;
        }
      }
    }
    return [];
  };



  const problemLink: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => {
    if (!href.includes("problemlink-1")) {
      return <a href={href}>{children}</a>;
    } else {
      return (
        <div>
          <Paper sx={{width:'300px',height: '100%', padding: '5px',margin:'5px'}}>
            <Grid2 container spacing={1} sx={{ height: '100%' }}>
              <Grid2 size={9}>
                <p style={{fontSize:'20px',marginBottom:'5px'}}>Practice</p>
                {children}
              </Grid2>
              <Grid2 size={3}>
                <Button sx={{ width: '100%', minWidth: '30px', height: '100%' }}>
                  <ArrowForwardIosOutlined />
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
        </div>
      );
    }
  };


  const components : Components = {
    a: problemLink
  }

  return (
    <div style={{backgroundColor:'#f9f9f9',overflow:'hidden',height:'100vh'}}>
      <NavBar/>
      <div style={{margin:'15px',height:'calc(100vh - 60px)'}}>
        <Grid2 container spacing={1}>
        <Grid2 size={3}>
          <Box sx={{border:'1px solid #ececec',padding:'10px',backgroundColor:'#fafcfd',height:'calc(100vh - 110px)'}}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleSearch}
              sx={{ marginBottom: '10px' }}
            />
            <RichTreeView
              items={MUI_X_PRODUCTS}
              onSelectedItemsChange={handleSelect}
              expandedItems={expandedNodes}
              
            />
          </Box>
        </Grid2>
        <Grid2 size={9}>
          <Box sx={{border:'1px solid #ececec',backgroundColor:'#fafcfd',overflow:'hidden',height:'calc(100vh - 90px)'}}>
            <Box sx={{height:'30px',boxShadow:'0 2px 4px 0 rgba(0,0,0,0.1)',padding:'10px'}}>
              <p style={{margin:'0',fontSize:'25px'}}>{selectedLabel}</p>
            </Box>
            <Container sx={{height:'100%',padding:'10px',overflow:'scroll'}}>
              <ReactMarkdown
                className='markdown-body'
                rehypePlugins={[rehypeHighlight,remarkGfm]}
                components={components}
                children={markdownText}
              />
                
              
            </Container>
          </Box>
        </Grid2>
        </Grid2>
      </div>
    </div>
  );
}

export default Tutorial;