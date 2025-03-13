import NavBar from "@/components/navBar/navBar";
import { Button, Chip, Divider, Typography } from "@mui/material";

function FrontPage(){
    return(
        <div>
            <NavBar/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' ,gap:'15px'}}>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        animation: 'slideUp 1s ease-out forwards' 
                    }}
                >
                    java.tonyz.top
                </Typography>
                <Chip 
                    sx={{ 
                        width: '200px', 
                        height: '6px', 
                        animation: 'slideUp 1s ease-out forwards' 
                    }}
                />
                <Typography 
                    variant="h5" 
                    sx={{ 
                        animation: 'slideUp 1.5s ease-out forwards' 
                    }}
                >
                    在线AP computer science A 练习平台
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        marginTop: '100px', 
                        animation: 'slideUp 2s ease-out forwards' 
                    }}
                >
                    历史真题 / 在线评测
                </Typography>
                <style>
                    {`
                        @keyframes slideUp {
                            from {
                                transform: translateY(100%);
                                opacity: 0;
                            }
                            to {
                                transform: translateY(0);
                                opacity: 1;
                            }
                        }
                    `}
                </style>
                <div style={{display:'flex'}}>
                </div>
            </div>

        </div>
    )
}

export default FrontPage;