import { Button, CircularProgress, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import CheckAdminPermission from "../Connection/API/CheckAdminPermission.tsx";
import CheckLoggedInPermission from "../Connection/API/CheckLoggedInPermission.tsx";
import { NavLink } from "react-router-dom";
import DeleteTokenFromCookies from "../Connection/DeleteTokenFromCookies.tsx";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from "../Navigation/AppBar/AppBar.tsx";
import UserAvatarMenu from '../Dashboard/UserAvatarMenu.tsx';
import { Grid, Paper, } from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { width } from "@mui/system";

export default function ManageTeams()
{
    const [loggedInUserPermission, setloggedInUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);

    CheckLoggedInPermission(setloggedInUserPermission);
    CheckAdminPermission(setAdminUserPermission);

    if(!adminUserPermission && !loggedInUserPermission)
        return(
            <>
                <h1>You need to login first to use this resource.</h1>
                <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained">LOG IN</Button></NavLink>
            </>
            );

    if(!adminUserPermission && loggedInUserPermission)
        return(
            <>
                <h1>This resource requires admin account.</h1>
                <h1>Please login with a valid account to continue.</h1>
                <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained" onClick={() => {DeleteTokenFromCookies()}}>LOG OUT</Button></NavLink>
            </>
            );

    return(
        <>
        <CssBaseline />
        <AppBar sx={{backgroundColor: "white"}} position="fixed">
            <Toolbar>
            {/*Here is the top navbar*/}
            <Box display="flex" flexDirection="row" sx={{marginLeft: "auto", alignItems: "center"}}>
                <UserAvatarMenu />
            </Box>
            </Toolbar>
        </AppBar>

        <Box sx={{width: "93vw", height: "75vh", backgroundColor: "none", marginLeft: "-14vw"}}>
            <Grid container>
                <Grid item xs={12} sx={{display: "flex"}}>
                    <Button onClick={() => {location.href = "/admindashboard";}}>
                        <ArrowBackIcon sx={{color: "black", fontSize: "2rem"}}/>
                    </Button>
                    <Typography variant="h4">
                        Manage Teams
                    </Typography>
                </Grid>

                <Grid item xs={2} sx={{display: "flex", marginTop: "3rem"}}>
                    <Typography variant="h5" sx={{marginBottom: "1rem"}}>
                        Project
                    </Typography>
                </Grid>
                <Grid item xs={10}></Grid>

                <Grid item xs={2} sx={{display: "flex"}}>
                    <Select
                    disabled
                    value={'MyValue'}
                    >
                        <MenuItem value={'MyValue'}>Example Project</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={10}></Grid>

            </Grid>
        </Box>
        </>
    );
}