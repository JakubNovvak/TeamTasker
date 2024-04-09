import { Box, Button, CircularProgress, Typography } from "@mui/material";
import axios, { AxiosProxyConfig, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import { NavLink } from "react-router-dom";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";
import MuiAdminNavbar from "../../components/Admin/MuiAdminNavbar";
import UserAvatarMenu from '../../components/Dashboard/UserAvatarMenu.tsx';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from "../../components/Navigation/AppBar/AppBar.tsx";
import ManageTeamsPage from "./Teams/ManageTeamsPage.tsx";

function renderSwitch(pathnName: string)
{
    //TODO: Implement better solution. Couldn't be done with switch case
    if (pathnName.startsWith("/admindashboard")) 
    {
        if (pathnName === "/admindashboard")
        {
            return <MuiAdminNavbar />;
        } 
        else if (pathnName.startsWith("/admindashboard/manageteams"))
        {
            return <ManageTeamsPage />;
        } 
        else if (pathnName.startsWith("/admindashboard/manageprojects"))
        {
            return <h1>Manage Projects</h1>;
        } 
        else if (pathnName.startsWith("/admindashboard/manageusers"))
        {
            return <h1>Manage Users</h1>;
        }
    }
    
    return <h1>404 - cannot find the module</h1>;
}

export default function AdminDashboard()
{
    const [loggedInUserPermission, setloggedInUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);

    CheckLoggedInPermission(setloggedInUserPermission);
    CheckAdminPermission(setAdminUserPermission);

    let pathName = location.pathname;

    console.log(pathName);

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

            {/* TODO: Determine here, which tab should be seen by user. */}

            {/* <MuiAdminNavbar /> */}

            {renderSwitch(pathName)}

        </>
    );
}