import { Box, Typography, CircularProgress, Button } from "@mui/material";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import { useEffect, useState } from "react";
import { ReadUserDto } from "../../components/Types/ReadUserDto";
import GetUserName from "../../components/ProjectsPage/API/GetUserName";
import { NavLink } from "react-router-dom";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";

export default function ProjectsPage()
{
    //TODO: method to get 
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [readUserName, setUserName] = useState<string>("");
    const [userPermission, setUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);

    CheckAdminPermission(setAdminUserPermission);

    useEffect(() => {
        GetUserName(setUserName, setSendingState);
    }, []);

    CheckLoggedInPermission(setUserPermission);

    if(sendingState)
        return(
            <CircularProgress sx={{color: "white"}} size={100}/>
        );

    if(!adminUserPermission && !userPermission)
        return(
            <>
                <h1>You need to login first to use this resource.</h1>
                <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained">LOG IN</Button></NavLink>
            </>
            );

    if(adminUserPermission && !userPermission)
        return(
            <>
                <h1>Admin account cannot be used for project management.</h1>
                <h1>Please login to your employee account instead.</h1>
                <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained" onClick={() => {DeleteTokenFromCookies()}}>LOG OUT</Button></NavLink>
            </>
            );

    return(<>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography fontSize={45} fontWeight={550} mt={-10}>
                Welcome {readUserName}!
            </Typography>
            <Typography fontSize={45} fontWeight={550} mb={7}>
                Choose a project to work on:
            </Typography>
            <NavLink to="/projectname/preview" style={{textDecoration: "none"}}><ProjectCard/></NavLink>
        </Box>
    
    </>);
}