import { Box, Button } from "@mui/material";
import MuiMiniDrawer from "../../components/Dashboard/MuiMiniDrawer";
import PreviewDrawerContent from "../../components/Dashboard/PreviewDrawerContent";

import Board from "../DrawerModules/Board";
import IssuesList from "../DrawerModules/IssuesList";
import Notifications from "../DrawerModules/Notifications";
import ProjectFeed from "../DrawerModules/ProjectFeed";
import ProjectMembers from "../DrawerModules/ProjectMembers";
import ProjectPreview from "../DrawerModules/ProjectPreview";
import ProjectSettings from "../DrawerModules/ProjectSettings";
import UserSettings from "../DrawerModules/UserSettings";
import { useState } from "react";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import { NavLink } from "react-router-dom";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";

function renderSwitch(pathnName: string)
{
    switch(pathnName)
    {
        case "/projectname/test":
            return <PreviewDrawerContent/>;

        case "/projectname/preview":
            return <ProjectPreview/>;

        case "/projectname/issueslist":
            return <IssuesList/>;

        case "/projectname/notifications":
            return <Notifications/>; 

        case "/projectname/projectfeed":
            return <ProjectFeed/>;

        case "/projectname/projectsettings":
            return <ProjectSettings/>;

        case "/projectname/usersettings":
            return <UserSettings/>;

        case "/projectname/board":
            return <Board/>;

        case "/projectname/projectmembers":
            return <ProjectMembers/>;
            
        default:
            return <h1>404 - cannot find the module</h1>;
    }
}

export default function ModulesContainer()
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

    if(adminUserPermission && !loggedInUserPermission)
        return(
            <>
                <h1>Admin account cannot be used for project management.</h1>
                <h1>Please login to your employee account instead.</h1>
                <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained" onClick={() => {DeleteTokenFromCookies()}}>LOG OUT</Button></NavLink>
            </>
            );

    return(
        <Box sx={{ display: 'flex', width: "90vw", ml: "-15rem"}}>
            
            <MuiMiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 0}}>
                
                {renderSwitch(pathName)}

            </Box>
        </Box>
    );
}