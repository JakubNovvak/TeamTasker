import { AccountCircle, Key } from "@mui/icons-material";
import { Input } from "@mui/joy";
import { Box, Divider, Paper, Typography, styled } from "@mui/material";
import Button from '@mui/material-next/Button';

const ContentSeparator = styled("hr")({
    border: "0",
    clear: "both",
    display: "block",
    width: "96%",               
    //backgroundImage: "linear-gradient(to right, transparent 0%, #a8a5a5 40%, #a8a5a5 60%, transparent 100%)",
    backgroundColor: "lightgray",
    height: "1px"
});

export default function LoginPage()
{
    return(
        <>
            <Paper elevation={24} sx={{minWidth: "30rem", minHeight: "32rem", backgroundColor: "#ebf7ff", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{mt: "3rem", mb: "2rem", textShadow: '2px 1px 4px rgba(0, 0, 0, 0.4)'}} variant="h4" color="#727273">
                    <span style={{color: "#242c6b", fontWeight: "bold"}}>Team</span> Tasker
                </Typography>

                <ContentSeparator sx={{marginBottom: "4.5rem"}}/>



                <Input sx={{alignSelf: "flex-center", backgroundColor: "#cceaff", minWidth: "20rem",  maxWidth: "20rem", mb: "1.3rem"}}
                startDecorator={<AccountCircle />}
                placeholder="Account login"
                />

                <Input sx={{backgroundColor: "#cceaff", minWidth: "20rem",  maxWidth: "20rem"}}
                startDecorator={<Key />}
                placeholder="Account password"
                />

                <Button sx={{mt: "3rem", backgroundColor: "#004679", minWidth: "10rem", fontFamily: "Roboto"}} variant="filled">LOG IN</Button>

                <Typography sx={{mt: "1rem", ml:"0.5rem"}} color="#242c" fontSize={15}>
                    {"<Password reset placeholder>"}
                </Typography>

            </Paper>
            <Typography color="lightgray" sx={{mt:"1rem"}}>
                Designed by <span style={{color: "#242c6b", fontWeight: "bold"}}>TeamTasker</span> ©
            </Typography>
        </>
    );    
}