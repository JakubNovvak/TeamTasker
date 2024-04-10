import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion";

export default function ProjectCard({id, name, description}: {id: number, name: string, description: string}) 
{
  const iamges = 
  [
    "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg", 
    "https://picsum.photos/seed/picsum/200/300", 
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
  ];

  var index = 0;

  switch (id) {
    case 1:
      index = 0;
      break;
  
    case 2:
      index = 1;
      break;

    case 3:
      index = 2;
      break;

    default:
      index = 3;
      break;
  }

  return (
    <motion.div
    whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 1)"}}>
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={iamges[index]}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description === "" ? "<Empty Description>" : description}
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