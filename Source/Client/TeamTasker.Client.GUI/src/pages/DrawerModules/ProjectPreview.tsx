import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import banner_placeholder from "../../assets/banner_placeholder.png";
import { Button, Textarea } from "@mui/joy";
import tempText from "./previewText";
import StatusSelect from "../../components/Modules/Preview/StatusSelect";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckLeaderPermission from "../../components/Connection/API/CheckLeaderPermission";
import { ReadProjectDto } from "../../components/Types/ReadProjectDto";
import { GetCurrentProjectInfo } from "../../components/Modules/API/GetCurrentProjectInfo";
import { ReadEmployeeDto } from "../../components/Types/ReadEmployeeDto";
import { GetProjectEmployees } from "../../components/Modules/API/GetProjectEmployees";

export default function ProjectPreview({projectId}: {projectId: string | undefined})
{
    const temp: ReadProjectDto = {
        id: 0,
        name: "",
        status: "default",
        description: "",
        deadline: "",
        isComplete: false,
        teamId: 0,
        picture: "",
        comments: []
    }

    const [project, setProject] = useState<ReadProjectDto>(temp);
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);
    const [projectEmployees, setProjectEmployees] = useState<ReadEmployeeDto[]>([]);

    const [leaderPermission, setLeaderPermission] = useState<boolean>(false);
    CheckLeaderPermission(setLeaderPermission);

    useEffect(() => {
        GetCurrentProjectInfo(projectId, setProject, setSendingState, setSendSucess);
        GetProjectEmployees(projectId, setProjectEmployees);
        //console.log("[0] " + projectEmployees[0].firstName);
        //console.log(project.status);
    }, []);

    if(projectId == undefined)
        return(
        <>403 - There is an invalid project id in the url.</>
    );

    //TODO: Make na assets file with hard coded values

    const images = 
    [
      "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg", 
      "https://picsum.photos/seed/picsum/200/300", 
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
    ];

    const statusString: {[key: string]: string} = 
    {
        "OnTheRightPath": "All tasks are on schedule. The people involved know their tasks. The system is set up well.",
        "OnHold": "All work in the project has been put on hold.",
        "Finished": "",
        "CriticallyOffThePath": "Project requires further supervision as fast as possible.",
        default: "There was an issue with displaying status description."
    }
  
    var index = 0;
  
    switch (projectId) {
      case "1":
        index = 0;
        break;
    
      case "2":
        index = 1;
        break;
  
      case "3":
        index = 2;
        break;
  
      default:
        index = 3;
        break;
    }

    return(
        <>
            <Box sx={{width: "100%", height: "95%", mt: "5rem"}}>
                <Box sx={{display: "flex", mb: "1.5rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Preview
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{height: "20rem", background: "lightgray"}}>
                            <img src={images[index]} style={{width: "100%", height: "100%"}}/>
                            {/* <Typography variant="h4">
                                This is a place for your project's banner.
                            </Typography> */}
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                    <Paper elevation={3} sx={{display: "flex", flexDirection:"column", height: "40rem", background: "white"}}>
                            <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem"}}>
                                Getting Started
                            </Typography>

                            <Textarea defaultValue={tempText} sx={{width: "90%", ml: "2rem", mt: "1.5rem", height: "30rem"}} variant="plain"/>

                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper elevation={3} sx={{display: "flex", flexDirection:"column", height: "12rem"}}>
                        <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem"}}>
                                Project Status
                        </Typography>
                        {!sendingState ? <StatusSelect projectStatus={project.status}/> : <></>}
                        
                        <Textarea defaultValue={!sendingState ? statusString[project.status] : ""} sx={{width: "97%", ml: "1rem", mt:"1rem", height: "2rem"}} variant="plain"/>

                    </Paper>
                    <Paper elevation={3} sx={{display: "flex", flexDirection:"column", height: "12rem", mt: "2rem"}}>
                        <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem"}}>
                                Project Description
                        </Typography>

                        <Textarea defaultValue={project.description} sx={{width: "90%", ml: "2rem", mt: "1.5rem", height: "5rem"}} variant="plain"/>

                    </Paper>
                    <Paper elevation={3} sx={{display: "flex", flexDirection:"column", height: "12rem", mt: "2rem"}}>
                        <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem"}}>
                                Members
                        </Typography>

                        <Typography variant="body1" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem"}}>
                                {/* Project Owner */}
                        </Typography>

                        <Box sx={{display: "flex", flexDirection: "row", ml: "1.5rem", mt: "0.5rem"}}>
                            {/* <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{width: "1.5rem", height: "1.5rem"}} />
                            <Typography variant="body1" fontWeight={500} sx={{marginRight: "auto", mt: "0rem"}}>
                                Test Testowy
                            </Typography> */}
                            <Box sx={{display: "flex", flexDirection: "row"}}>
                                {projectEmployees.map(employee => (
                    
                                employee == null 
                                ?
                                <></>
                                :
                                <>
                                    <Avatar alt="Cindy Baker" src={employee.avatar} sx={{width: "1.5rem", height: "1.5rem"}} />
                                    <Typography variant="body1" fontWeight={500} sx={{marginRight: "auto", mt: "0rem"}}>
                                        {" "}{employee.firstName} {employee.lastName}{"   "}
                                    </Typography>
                                    </>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{display: "flex", flexDirection: "row", ml: "1.5rem"}}>
                            {leaderPermission ?
                                <Button sx={{width: "5rem", mt: "1.5rem"}}>Add+</Button>
                            :
                                <></>
                            }
                        
                            <NavLink to="projectmembers" style={{textDecoration: "none"}}>
                                <Button variant="outlined" sx={{width: "10rem", ml: "1.5rem", mt: "1.5rem"}}>
                                    Show all members
                                </Button>
                            </NavLink>
                        </Box>

                    </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}