import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ManageProjectsHome()
{
    return(
        <>
        <Box sx={{width: "93vw", height: "85vh", backgroundColor: "none", marginLeft: "-14vw"}}>
            <Grid container spacing={12}>

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
                <Paper elevation={5} sx={{padding: "2rem"}}>
                    <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
                    <Typography>
                    Create Project
                    </Typography>
                </Paper>
                </motion.div>
                </NavLink>
            </Grid>

            <Grid item xs={3}>
                <NavLink to="/admindashboard/manageprojects/assignteam" style={{textDecoration: "none"}}>
                <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
                <Paper elevation={5} sx={{padding: "2rem"}}>
                    <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
                    <Typography>
                    Assign Team to the Project
                    </Typography>
                </Paper>
                </motion.div>
                </NavLink>
            </Grid>

            </Grid>
        </Box>
        </>
    );
}