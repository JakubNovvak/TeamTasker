import { Box, Button, Typography } from "@mui/material";
import PreviewIssuesTable from "../../components/Modules/IssuesList/PreviewIssuesTable";

export default function IssuesList()
{
    return(
        <>
            <Box sx={{width: "100%", minHeight: "38rem"}}>
                <Box sx={{display: "flex", mb: "1.5rem", mt: "4rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Issues List <Button sx={{ml: "1rem", height: "2.3rem", backgroundColor: "#363b4d"}}variant="contained">Create Issue</Button>
                    </Typography>
                </Box>
                <PreviewIssuesTable/>
            </Box>
        </>
    );
}