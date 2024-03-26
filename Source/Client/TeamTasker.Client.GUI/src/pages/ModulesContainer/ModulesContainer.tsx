import { Box } from "@mui/material";
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
    let pathName = location.pathname;

    console.log(pathName);
    return(
        <Box sx={{ display: 'flex', width: "90vw", ml: "-15rem"}}>
            
            <MuiMiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 0}}>
                
                {renderSwitch(pathName)}

            </Box>
        </Box>
    );

    return(
        <>
            <MuiMiniDrawer />
        </>
    );
}