import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';

export default function CreateUser()
{
    return(
        <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "none", mb: "43vh", minHeight:"100vh", maxWidth: "120rem", minWidth: "110rem"}}>
                <Grid container spacing={12}>

                    <Grid item xs={12} sx={{display: "flex"}}>
                        <Button onClick={() => {location.href = "/admindashboard/manageusers";}}>
                            <ArrowBackIcon sx={{color: "black", fontSize: "2rem"}}/>
                        </Button>
                        <Typography variant="h4">
                            Create User
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
        </Box>
    );
}