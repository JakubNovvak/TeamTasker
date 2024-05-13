import { Box, Typography } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { SetStateAction, useState } from "react";
import PublishPostDialog from "../../Modules/ProjectFeed/PublishPostDialog/PublishPostDialog";

export default function ProjectFeedOptions()
{
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    
    return(
        <>
            <PublishPostDialog projectId={""} openDialog={openDialog} setOpenDialog={setOpenDialog} userId={0} />
            <Box sx={{color: "#363b4d", display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer"}}
            onClick={() => {setOpenDialog(true)}}
            >
                <AddCommentIcon sx={{mr: "0.5rem"}}/>
            <Typography color={"black"}>
                    Publish
                </Typography>
            </Box>
        </>
    );
}