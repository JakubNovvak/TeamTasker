import { Box, Typography } from "@mui/material";
import PreviewMembersTable from "../../components/Modules/ProjectMembers/PreviewMembersTable";


export default function ProjectMembers()
{
    return(
        <>
            <Box sx={{width: "100%", height: "42rem"}}>
                <Box sx={{display: "flex", mb: "1.5rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Project Members
                    </Typography>
                </Box>
                
                <PreviewMembersTable/>
            </Box>
        </>
    );
}