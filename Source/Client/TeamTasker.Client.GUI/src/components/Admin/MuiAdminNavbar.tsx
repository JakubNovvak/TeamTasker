import Box from '@mui/material/Box';
import { Grid, Paper, Typography } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InfoIcon from '@mui/icons-material/Info';
import {motion} from "framer-motion";
import { NavLink } from 'react-router-dom';

export default function MuiAdminNavbar() {

  return (
    <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "none", mb: "20vh", minHeight:"20rem", maxWidth: "120rem", minWidth: "100rem"}}>
        <Grid container spacing={12} sx={{backgroundColor: "none", width: "92%"}}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Administration
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <NavLink to="/admindashboard/manageusers" style={{textDecoration: "none"}}>
              <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
              <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                <GroupAddIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                  Manage Users
                </Typography>
              </Paper>
              </motion.div>
            </NavLink>
          </Grid>

          <Grid item xs={3}>
            <NavLink to="/admindashboard/manageprojects" style={{textDecoration: "none"}}>
              <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
              <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                <VideoLabelIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                  Manage Projects
                </Typography>
              </Paper>
              </motion.div>
            </NavLink>
          </Grid>

          <Grid item xs={3}>
            <NavLink to="/admindashboard/manageteams" style={{textDecoration: "none"}}>
              <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
              <Paper elevation={5} sx={{padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
                <GroupsIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                  Manage Teams
                </Typography>
              </Paper>
              </motion.div>
            </NavLink>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
              <SettingsIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Manage System
              </Typography>
            </Paper>
          </Grid>

          {/*Fillers*/}

          <Grid item xs={3}>
          <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
              <NotificationsActiveIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Notifications
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
          <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
              <InfoIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Informations
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
          <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
              Placeholder 3
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
          <Paper elevation={5} sx={{backgroundColor: "#e3e3e3", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "22rem"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
              Placeholder 4
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>

    </Box>
  );
}