import { Box, Button, ButtonGroup, Divider, Grid, Paper, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import IssueCard from "../../components/Modules/Board/IssueCard";
import { NavLink } from "react-router-dom";

export default function Board()
{
    return(
        <>
             <Box sx={{width: "100%", height: "95%", mt: "5rem"}}>
                {/* <Box sx={{display: "flex", mb: "1.5rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Basic board
                    </Typography>
                </Box> */}
                <Grid container>
                    <Grid item xs={4} sx={{display: "flex", mb: "1.5rem"}}>
                        <Typography variant="h4" sx={{marginRight: "auto"}}>
                            Basic Board
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{display: "flex", flexDirection: "row"}}>
                        <ButtonGroup variant="text" aria-label="Basic button group" sx={{ml: "1rem", marginLeft: "auto"}}>
                            <Button sx={{color: "#363b4d"}}><ShareIcon/></Button>
                            <Button sx={{color: "#363b4d"}}><SwapCallsIcon/></Button>
                            <Button sx={{color: "#363b4d"}}><EditNotificationsIcon/></Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Grid container spacing={6}>

                    {/* New issue */}
                    <Grid item xs={2}>
                        <Paper elevation={1} sx={{minHeight: "40rem", width: "115%", padding: "0.5rem", backgroundColor: "#fefefe"}}>
                        <Paper sx={{backgroundColor: "#1098ad", width: "100%", height: "0.5rem"}}/>
                            <Box display={"flex"} flexDirection={"column"} sx={{ml: "0.5rem"}}>
                                <Typography sx={{marginRight: "auto", mt: "0.8rem"}}>
                                    Status
                                </Typography>
                                <Typography fontWeight={550} sx={{marginRight: "auto"}}>
                                    New Issue <NavLink to="/projectname/issueslist"><Button sx={{width:"5rem", height: "1.5rem", ml: "2rem"}} variant="outlined">+</Button></NavLink>
                                </Typography>
                            </Box>
                            <Divider sx={{mt: "1rem"}}/>
                        </Paper>
                    </Grid>

                    {/* In progress */}
                    <Grid item xs={2}>
                        <Paper elevation={1} sx={{minHeight: "40rem", width: "115%", padding: "0.5rem", backgroundColor: "#fefefe"}}>
                        <Paper sx={{backgroundColor: "#255ed9", width: "100%", height: "0.5rem"}}/>
                            <Box display={"flex"} flexDirection={"column"} sx={{ml: "0.5rem"}}>
                                <Typography sx={{marginRight: "auto", mt: "0.8rem"}}>
                                    Status
                                </Typography>
                                <Typography fontWeight={550} sx={{marginRight: "auto"}}>
                                    In progress
                                </Typography>
                            </Box>
                            <Divider sx={{mt: "1rem"}}/>
                            <IssueCard taskNumber={"9"} taskTitle={"Chair the presentation this wednesday"} dateFinish={"12 march, 18:30"}/>
                        </Paper>
                    </Grid>

                    {/* On hold */}
                    <Grid item xs={2}>
                        <Paper elevation={1} sx={{minHeight: "40rem", width: "115%", padding: "0.5rem", backgroundColor: "#fefefe"}}>
                        <Paper sx={{backgroundColor: "#c930b2", width: "100%", height: "0.5rem"}}/>
                            <Box display={"flex"} flexDirection={"column"} sx={{ml: "0.5rem"}}>
                                <Typography sx={{marginRight: "auto", mt: "0.8rem"}}>
                                    Status
                                </Typography>
                                <Typography fontWeight={550} sx={{marginRight: "auto"}}>
                                    On hold
                                </Typography>
                            </Box>
                            <Divider sx={{mt: "1rem"}}/>
                        </Paper>
                    </Grid>

                    {/* issue Done */}
                    <Grid item xs={2}>
                        <Paper elevation={1} sx={{minHeight: "40rem", width: "110%", padding: "0.5rem", backgroundColor: "#fefefe"}}>
                        <Paper sx={{backgroundColor: "#58e82c", width: "100%", height: "0.5rem"}}/>
                            <Box display={"flex"} flexDirection={"column"} sx={{ml: "0.5rem"}}>
                                <Typography sx={{marginRight: "auto", mt: "0.8rem"}}>
                                    Status
                                </Typography>
                                <Typography fontWeight={550} sx={{marginRight: "auto"}}>
                                    Issue Done
                                </Typography>
                            </Box>
                            <Divider sx={{mt: "1rem"}}/>
                            <IssueCard taskNumber={"1"} taskTitle={"Create database model"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"2"} taskTitle={"Add entities based on database model"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"3"} taskTitle={"Create the most importnant Dtos"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"4"} taskTitle={"Create class AppDbContext"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"5"} taskTitle={"Implement Repositories"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"6"} taskTitle={"Add repositories to the dependency injection container in Program.cs"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"7"} taskTitle={"Add AutoMapper profiles to allow using dtos in services"} dateFinish={"12 march, 18:30"}/>
                            <IssueCard taskNumber={"8"} taskTitle={"Create additional initial views"} dateFinish={"12 march, 18:30"}/>

                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography sx={{marginRight: "auto", mt: "0.5rem", ml: "0.5rem"}}>
                                + Add another list to the board
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}