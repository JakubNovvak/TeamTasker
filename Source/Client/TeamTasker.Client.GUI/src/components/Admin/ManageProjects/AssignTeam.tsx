import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';

export default function AssignTeam()
{
    return(
        <>
            <Box sx={{width: "93vw", height: "85vh", backgroundColor: "none", marginLeft: "-14vw"}}>
                <Grid container spacing={12}>

                    <Grid item xs={12} sx={{display: "flex"}}>
                        <Button onClick={() => {location.href = "/admindashboard/manageprojects";}}>
                            <ArrowBackIcon sx={{color: "black", fontSize: "2rem"}}/>
                        </Button>
                        <Typography variant="h4">
                            Assign Team
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper elevation={5} sx={{padding: "2rem"}}>
                            <BatteryUnknownIcon sx={{fontSize: "3rem"}}/>
                            <Typography>
                                Test Placeholder
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}