import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion";

export default function ProjectCard() {
  return (
    <motion.div
    whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 1)"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/seed/picsum/200/300"
        title="Example Project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Example Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
            This is an example project, that was hard coded into the project for display purposes.
            Proper implementation will be done on 5th sprint - starting today.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </motion.div>
  );
}