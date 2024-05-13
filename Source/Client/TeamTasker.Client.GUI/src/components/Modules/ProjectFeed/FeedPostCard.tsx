import { Avatar, Box, Grid, Typography } from "@mui/material";
import FeedPostCommentSection from "./PostComments/FeedPostCommentSection";

export default function FeedPostCard({commnetsNumber}: {commnetsNumber: number})
{
    return(
        <>
            {/*Post Content Section*/}
            <Grid item xs={5} mt={"2.5rem"}>
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
            
            {/*Comments Section*/}
            <Grid item xs={5}>
                {/*<FeedPostCommentSection commnetsNumber={commnetsNumber} />*/}
            </Grid>

            <Grid item xs={7}></Grid>
        </>
    );
}