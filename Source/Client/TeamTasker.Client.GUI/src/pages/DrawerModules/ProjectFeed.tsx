import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function ProjectFeed()
{
    return(
        <>
            <Box sx={{width: "100%", height: "94%", mt: "5rem"}}>
                <Box sx={{display: "flex", mb: "2.5rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Project Feed
                    </Typography>
                </Box>

                <Grid container>
                    <Grid item xs={5}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{width: "4rem", height: "4rem"}}/> 
                            <Typography fontSize={20} fontWeight={550} sx={{alignSelf: "center", ml: "1rem", textAlign: "left"}}>
                                There will be changes in the project management team.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", fontStyle: 'italic'}}>
                                Added by Test Testowy 3 hours ago.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", textAlign: "left"}}>
                                Hello Team - I just wanted to let you know that our HR department has decided to make some changes in the project management team. Don't worry, it's nothing serious - there's no need to panic or be afraid of losing your job. As developers, you shouldn't be affected by anything done with the project management team.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={7}></Grid>

                    <Grid item xs={5} sx={{mt: "5rem"}}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{width: "4rem", height: "4rem"}}/> 
                            <Typography fontSize={20} fontWeight={550} sx={{alignSelf: "center", ml: "1rem", textAlign: "left"}}>
                                Rubber duck dubbuging is a thing - don't be afraid to speak with your colleagues.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", fontStyle: 'italic'}}>
                                Added by Test Testowy 5 hours ago.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", textAlign: "left"}}>
                            Hello Team - I'd like to address the concept of rubber duck debugging, a technique where you explain your code to a rubber duck, 
                            serving as a 'listener.' It's an incredibly effective tool in the debugging process, often helping to identify 
                            issues as we talk through them step by step. Don't hesitate to utilize this method in our work. Many programmers 
                            rely on it to tackle challenges they face. Discussing code with a rubber duck can lead to fresh insights and a 
                            better understanding of the problem at hand.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={7}></Grid>

                    <Grid item xs={5} sx={{mt: "5rem"}}>
                        <Box display={'flex'} flexDirection={'row'}>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{width: "4rem", height: "4rem"}}/> 
                            <Typography fontSize={20} fontWeight={550} sx={{alignSelf: "center", ml: "1rem", textAlign: "left"}}>
                                Welcome to our new project.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", fontStyle: 'italic'}}>
                                Added by Test Testowy 12 hours ago.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} sx={{mt: "1.0rem"}}>
                            <Typography fontSize={14} fontWeight={500} sx={{alignSelf: "center", ml: "0rem", textAlign: "left"}}>
                            I'm thrilled to welcome you all to our new project! This is an exciting opportunity for us to collaborate, 
                            innovate, and deliver something exceptional together. Let's dive in with enthusiasm and determination. 
                            Together, we'll create something truly remarkable.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={7}></Grid>
                </Grid>

            </Box>
        </>
    );
}