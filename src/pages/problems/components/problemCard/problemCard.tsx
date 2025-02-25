import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './problemCard.css';
import { Link } from "react-router";

interface ProblemCardProps {
    id: string;
    title: string;
    description: string;
}

function ProblemCard({ id, title, description }: ProblemCardProps) {
    return (
        <div className="problems-problemcard-root">
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }}>
                        {id}
                    </Typography>
                    <Typography sx={{ fontSize: 25 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/attempt/${id}`} style={{ marginLeft: 'auto', marginTop: '0', marginBottom: '0', padding: '0' }}>
                        <Button size="small" sx={{ marginLeft: 'auto', marginTop: 'auto', overflow: 'hidden' }}>
                            <ArrowForwardIcon />
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

export default ProblemCard;