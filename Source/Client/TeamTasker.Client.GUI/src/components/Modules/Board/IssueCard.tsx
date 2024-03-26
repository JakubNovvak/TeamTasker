import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

export default function IssueCard({taskTitle, taskNumber, dateFinish}: {taskTitle: String, taskNumber: String, dateFinish: String})
{
    return(
        <>
            <Paper elevation={2} sx={{width: "100%", minHeight: "6rem", mt: "1rem"}}>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography fontSize={15} color="gray" sx={{mt: "0.2rem", ml: "0.2rem"}}>
                            #{taskNumber}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                    </Grid>

                    <Typography fontSize={15} sx={{mt: "0.2rem", ml: "0.5rem", textAlign: "left", pr: "0.3rem"}}>
                            {taskTitle}
                    </Typography>

                    <Box sx={{display: "flex", flexDirection: "row", ml: "0.5rem", mt: "1.0rem", mb: "0.3rem"}}>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" sx={{width: "1.2rem", height: "1.2rem"}} />
                            <Typography color="lightgray" variant="body1" fontSize={13} fontWeight={540} sx={{marginRight: "auto", ml: "0.3rem"}}>
                                {dateFinish}
                            </Typography>
                    </Box>

                </Grid>
            </Paper>
        </>
    );
}