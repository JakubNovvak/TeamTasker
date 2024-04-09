import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from "../Navigation/AppBar/AppBar.tsx";
import UserAvatarMenu from '../Dashboard/UserAvatarMenu.tsx';
import { Grid, Paper, Typography } from '@mui/material';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';

import {motion} from "framer-motion";
import { NavLink } from 'react-router-dom';

export default function MuiAdminNavbar() {

  return (
    <>      
      <Box sx={{width: "93vw", height: "85vh", backgroundColor: "none", marginLeft: "-14vw"}}>
        <Grid container spacing={12}>
          <Grid item xs={12} sx={{display: "flex"}}>
            <Typography variant="h4">
              Administration
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <NavLink to="/admindashboard/manageusers" style={{textDecoration: "none"}}>
              <motion.div whileHover={{scale: 1.05, boxShadow: "7px 8px 54px -6px rgba(0, 0, 0, 0.2)"}}>
              <Paper elevation={5} sx={{padding: "2rem"}}>
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
              <Paper elevation={5} sx={{padding: "2rem"}}>
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
              <Paper elevation={5} sx={{padding: "2rem"}}>
                <GroupsIcon sx={{fontSize: "3rem"}}/>
                <Typography>
                  Manage Teams
                </Typography>
              </Paper>
              </motion.div>
            </NavLink>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3"}}>
              <SettingsIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Manage System
              </Typography>
            </Paper>
          </Grid>

          {/*Fillers*/}

          <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Placeholder 1
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
                Placeholder 2
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
              Placeholder 3
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={5} sx={{padding: "2rem", backgroundColor: "#e3e3e3"}}>
              <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
              <Typography>
              Placeholder 4
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>

    </>
  );
}