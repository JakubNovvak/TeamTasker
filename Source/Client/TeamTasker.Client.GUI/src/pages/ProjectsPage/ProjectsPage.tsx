import { Box, Typography, CircularProgress, Button } from "@mui/material";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import { useEffect, useState } from "react";
import GetUserName from "../../components/ProjectsPage/API/GetUserName";
import { NavLink } from "react-router-dom";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";
import DeleteTokenFromCookies from "../../components/Connection/DeleteTokenFromCookies";
import { ReadProjectDto } from "../../components/Types/ReadProjectDto";
import { GetUsersProjects } from "../../components/ProjectsPage/API/GetUsersProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectsPage()
{
    //TODO: method to get 
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [readUserName, setUserName] = useState<string>("");
    const [userPermission, setUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);
    const [projects, setProjects] = useState<ReadProjectDto[]>([]);
    const [userId, setUserId] = useState<number>(0);
    
    const [loadingLoggedInState, setLoadingLoggedInState] = useState<boolean>(true);
    const [loadingAdminState, setLoadingAdminState] = useState<boolean>(true);

    CheckAdminPermission(setAdminUserPermission, setLoadingAdminState);
    CheckLoggedInPermission(setUserPermission, setLoadingLoggedInState);

    useEffect(() => {
        GetUserName(setUserName, setSendingState, setUserId);
        GetUsersProjects(userId, setProjects);
    }, [userId]);

    if(sendingState || loadingLoggedInState || loadingAdminState)
    {
        return(
            <CircularProgress sx={{color: "white"}} size={100}/>
        );
    }

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

    console.log("userPermission: " + userPermission + "projects.length: " + projects.length);

    var tempIterator = 0;
    projects.map(project => 
        {
            if(project == null)
                tempIterator = tempIterator + 1;
        }
    );

    if((userPermission && projects.length == 0) || tempIterator == projects.length)
        return(
            <AnimatePresence>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                >
                    <Typography fontSize={45} fontWeight={550} mt={-10}>
                        Welcome {readUserName}!
                    </Typography>
                    <Typography fontSize={45} fontWeight={550} mb={7}>
                        Currently, you are not assigned to any project.
                    </Typography>
                
                    <Typography fontSize={45} fontWeight={550} mb={7}>
                        Contact your administrator.
                    </Typography>
                
                    <NavLink to="/login" style={{textDecoration: "none"}}><Button size="large" variant="contained" onClick={() => {DeleteTokenFromCookies()}}>LOG OUT</Button></NavLink>
                </motion.div>
            </AnimatePresence>
        );

    return(
        <AnimatePresence>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography fontSize={45} fontWeight={550} mt={-10}>
                    Welcome {readUserName}!
                </Typography>
                <Typography fontSize={45} fontWeight={550} mb={7}>
                    Choose a project to work on:
                </Typography>
                {/* <NavLink to="/projectname/preview" style={{textDecoration: "none"}}><ProjectCard/></NavLink> */}
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    {projects.map(project => (
        
                    project == null 
                    ? 
                    <></> 
                    :
                    <NavLink key={project.id} to={`/projectname/${project.id}/preview`} style={{textDecoration: "none", marginLeft: "1rem", marginRight: "1rem"}}><ProjectCard id={project.id} name={project.name} description={project.description}/></NavLink>

                    ))}
                </Box>
            </Box>
            </motion.div>
        </AnimatePresence>
    
    );
}