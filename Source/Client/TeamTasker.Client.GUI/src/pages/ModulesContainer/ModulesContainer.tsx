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
import { useEffect, useState } from "react";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import { NavLink, useParams } from "react-router-dom";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";
import { ReadProjectDto } from "../../components/Types/ReadProjectDto";
import { GetCurrentProjectInfo } from "../../components/Modules/API/GetCurrentProjectInfo";
import ProjectSchedule from "../DrawerModules/ProjectSchedule";

function renderSwitch(pathnName: string, projectId: string | undefined)
{
    if(projectId == undefined)
        return <h1>404 - invalid project's id in the url</h1>;

    switch(pathnName)
    {
        case "/projectname/test":
            return <PreviewDrawerContent/>;

        case `/projectname/${projectId}/preview`:
            return <ProjectPreview projectId={projectId}/>;

        case `/projectname/${projectId}/issueslist`:
            return <IssuesList projectId={projectId}/>;

        case `/projectname/${projectId}/notifications`:
            return <Notifications/>; 

        case `/projectname/${projectId}/projectfeed`:
            return <ProjectFeed/>;

        case `/projectname/${projectId}/projectsettings`:
            return <ProjectSettings/>;

        case `/projectname/${projectId}/usersettings`:
            return <UserSettings/>;

        case `/projectname/${projectId}/board`:
            return <Board projectId={projectId}/>;

        case `/projectname/${projectId}/projectmembers`:
            return <ProjectMembers projectId={projectId}/>;

            case `/projectname/${projectId}/projectschedule`:
                return <ProjectSchedule />;
            
        default:
            return <h1>404 - cannot find the module</h1>;
    }
}

export default function ModulesContainer()
{
    // const temp: ReadProjectDto = {
    //     id: 0,
    //     name: "",
    //     description: "",
    //     deadline: "",
    //     isComplete: false,
    //     teamId: 0,
    //     picture: "",
    //     comments: []
    // }

    const [loggedInUserPermission, setloggedInUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);

    CheckLoggedInPermission(setloggedInUserPermission);
    CheckAdminPermission(setAdminUserPermission);
    let pathName = location.pathname;

    const { projectId } = useParams<{projectId: string}>();

    useEffect(() => {
        //GetCurrentProjectInfo(projectId, setProject, setSendingState, setSendSucess);
    }, [projectId, loggedInUserPermission]);

    //console.log("Zmienna z url: " + projectId);

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
                
                {renderSwitch(pathName, projectId)}

            </Box>
        </Box>
    );
}