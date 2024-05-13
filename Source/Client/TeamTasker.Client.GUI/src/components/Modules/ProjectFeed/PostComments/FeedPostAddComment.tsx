import { Avatar, Grid, IconButton, Input } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function FeedPostAddComment()
{
    const [commentContent, setCommentContent] = useState<string>("");

    return(
        <Grid container sx={{mt: "4rem", mb: "4rem"}}>
            <Grid item xs={1}>
                <Avatar alt="?" src={""} sx={{width: "2.5rem", height: "2.5rem"}}>?</Avatar>
            </Grid>
            <Grid item xs={11}>
                <Input fullWidth
                value={commentContent}
                onChange={(event) => {setCommentContent(event.target.value)}}
                placeholder="Type here to add a new comment..."
                endAdornment={<IconButton onClick={() => {
                    //Here should be added function, to call an API
                    //Here should be sessionStorage function, to hot reload comments list
                }}>
                    <SendIcon/></IconButton>}
                />
            </Grid>
        </Grid>
    );
}