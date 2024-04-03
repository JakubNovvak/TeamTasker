import { Button, CircularProgress, Typography } from "@mui/material";
import axios, { AxiosProxyConfig, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import { NavLink } from "react-router-dom";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";
import MuiAdminNavbar from "../../components/Admin/MuiAdminNavbar";


export default function Admin()
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
            <MuiAdminNavbar />
        </>
    );
}