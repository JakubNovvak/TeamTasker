import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function ManageUsersHome()
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
                            Manage Users
                        </Typography>
                    </Grid>

                <Grid item xs={3}>
                    <NavLink to="/admindashboard/manageusers/createuser" style={{textDecoration: "none"}}>
                    <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
                    <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                        <PersonAddIcon sx={{fontSize: "3rem"}}/>
                        <Typography>
                            Create User
                        </Typography>
                    </Paper>
                    </motion.div>
                    </NavLink>
                </Grid>

                <Grid item xs={3}>
                <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                <ManageAccountsIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                    Edit User
                </Typography>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                <RecentActorsIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                    Users User
                </Typography>
                </Paper>
                </Grid>
                <Grid item xs={3}></Grid>

                </Grid>
            </Box>
        </Box>
    );
}