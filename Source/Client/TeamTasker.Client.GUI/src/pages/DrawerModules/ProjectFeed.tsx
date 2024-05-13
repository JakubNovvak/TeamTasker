import { Box, Grid, Typography } from "@mui/material";
import FeedPostCard from "../../components/Modules/ProjectFeed/FeedPostCard";
import { useState } from "react";

export default function ProjectFeed()
{
    const [feedPosts, setFeedPosts] = useState<number[]>([0,3,1,1]);

    return(
        <>
            <Box sx={{width: "100%", height: "94vh", mt: "5rem"}}>
                <Box sx={{display: "flex", mb: "0rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Project Feed
                    </Typography>
                </Box>

                <Grid container>
                {feedPosts.map(post =>(
                    <FeedPostCard commnetsNumber={post} />
                ))}
                </Grid>

            </Box>
        </>
    );
}