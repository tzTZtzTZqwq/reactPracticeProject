import * as React from 'react';
import NavBar from '@/components/navBar/navBar';
import { RichTreeView, TreeViewBaseItem } from '@mui/x-tree-view';
import { ExpandMore, ChevronRight, Pages, ArrowForwardIosOutlined } from '@mui/icons-material';
import { Box, Button, Container, Grid2, Paper, TextField } from '@mui/material';
import ReactMarkdown, { Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import '@/styles/githubLightCss.css';

function Tutorial() {
  const [selectedLabel, setSelectedLabel] = React.useState('title');
  const [value, setValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedNodes, setExpandedNodes] = React.useState<string[]>([]);
  const [highlightedNode, setHighlightedNode] = React.useState<string | null>(null);

  const markdownText = `
  A variable acts as a named reference to a specific location in memory where a data value is stored. When we declare a variable, we define its name and allocate memory space for it. 
The first assignment of a value to this variable is called initialization, which stores the data in the associated memory location. Subsequent assignments modify the stored value, while reading the variable retrieves the current value from its memory location for use in operations or calculations. This mechanism allows programs to dynamically manage and manipulate data throughout their execution.

In Java, declaring a variable involves specifying the data type and the variable name. The format for declaring a variable is as follows:
\`\`\`
[data_type] [variable_name];
\`\`\`
---
**Steps to declare a variable:**
- Data Type: This specifies the type of data the variable will store, such as int for integers, double for floating-point numbers, String for text, etc.
- Variable Name: This is the identifier that represents the variable in the program. It must follow Java’s naming rules, such as starting with a letter and not using any reserved keywords.

\`\`\`
public class Main {
	public static void main(String[] args) {
		int age;           // Declares an integer variable named 'age'
		double price;      // Declares a double variable named 'price'
		String name;       // Declares a String variable named 'name'
	}
}
\`\`\`
In this example:
int is the data type for integer numbers.
double is the data type for floating-point numbers.
String is the data type for text (sequences of characters).

---

**Assigning a Value to a Variable**

In Java, the equal sign (=) is used as the assignment operator, which means that the value on the right-hand side (known as the right value or rvalue) is assigned to the variable on the left-hand side (the left value or lvalue). This process is known as assignment.

The left side of the equal sign must be a variable (the place where the value will be stored).
The right side is the value or expression that will be stored in the variable.
[hello](https://markdown.com.cn)
Once a variable is declared, it can be initialized with a value (assigned a value) at a later point. For example:
\`\`\`
public class Main {
	public static void main(String[] args) {
		int age = 25;           // Initializes the 'age' variable with a value of 25
		double price = 19.99;      // Initializes the 'price' variable with a value of 19.99
		String name = "Alice";     // Initializes the 'name' variable with the value "Alice"
	}
}
\`\`\`

The equal sign does **not** mean equality here, but rather that the right-hand side value is being assigned to the left-hand side variable.`;

  const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
    {
      id: 'u0',
      label: '0 - Introduction',
      children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
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

  const handleSelect = (event: React.SyntheticEvent, nodeId) => {
    console.log(nodeId);
    const selectedItem = findItemById(MUI_X_PRODUCTS, nodeId);
    setExpandedNodes((prevExpandedNodes) => 
      prevExpandedNodes.includes(nodeId) 
        ? prevExpandedNodes.filter(id => id !== nodeId) 
        : [...prevExpandedNodes, nodeId]
    );
    
    if (selectedItem && nodeId.includes('d')) {
      setSelectedLabel(selectedItem.label);
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

  const problemLink: React.FC<{ href: string }> = ({ href }) => {
    
      if(href.includes("problemlink")){
        return (
          <a href={href}>{href}</a>
        )
      }else{
        return (
        <div>  
          <Paper sx={{height:'80px',width:'200px',padding:'5px'}}>
            <Grid2 container spacing={1} sx={{height:'100%'}}>
              <Grid2 size={9}>
                <p>Practice</p>
              </Grid2>
              <Grid2 size={3}>
                <Button  sx={{width:'100%',minWidth:'30px',height:'100%'}}>
                  <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
        </div>
        )
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
              >
                {markdownText}
              </ReactMarkdown>
            </Container>
          </Box>
        </Grid2>
        </Grid2>
      </div>
    </div>
  );
}

export default Tutorial;