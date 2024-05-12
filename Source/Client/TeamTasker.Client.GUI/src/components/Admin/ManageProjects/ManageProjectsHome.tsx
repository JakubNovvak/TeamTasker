import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import CallToActionIcon from '@mui/icons-material/CallToAction';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewListIcon from '@mui/icons-material/ViewList';

export default function ManageProjectsHome()
{
    return(
        <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "none", mb: "43vh", minHeight:"100vh", maxWidth: "120rem", minWidth: "110rem"}}>
            <Grid container spacing={12} sx={{backgroundColor: "none", width: "100%"}}>

                <Grid item xs={12} sx={{display: "flex"}}>
                    <Button onClick={() => {location.href = "/admindashboard";}}>
                        <ArrowBackIcon sx={{color: "black", fontSize: "2rem"}}/>
                    </Button>
                    <Typography variant="h4">
                        Manage Projects
                    </Typography>
                </Grid>

            <Grid item xs={3}>
                <NavLink to="/admindashboard/manageprojects/createproject" style={{textDecoration: "none"}}>
                <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
                <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                    <AddBoxIcon sx={{fontSize: "3rem"}}/>
                    <Typography>
                    Create New Project
                    </Typography>
                </Paper>
                </motion.div>
                </NavLink>
            </Grid>

            <Grid item xs={3}>
                <NavLink to="/admindashboard/manageprojects/assignteam" style={{textDecoration: "none"}}>
                <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
                <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                    <FolderSharedIcon sx={{fontSize: "3rem"}}/>
                    <Typography>
                    Assign Team to the Project
                    </Typography>
                </Paper>
                </motion.div>
                </NavLink>
            </Grid>

            <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
              <CallToActionIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Edit Project
              </Typography>
            </Paper>
            </Grid>

            <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
              <ViewListIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Projects List
              </Typography>
            </Paper>
            </Grid>

            </Grid>
        </Box>
        </Box>
    );
}