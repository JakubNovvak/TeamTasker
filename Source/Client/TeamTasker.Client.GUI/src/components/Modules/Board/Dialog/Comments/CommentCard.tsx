import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function CommentCard()
{
    return(
        <Card elevation={6}>
        <Box display={"flex"} flexDirection={"row"} minWidth={600} maxWidth={600} minHeight={100}>
            <CardContent>
                <Avatar>?</Avatar>
            </CardContent>

            <CardContent>
                <Typography sx={{mt: "0.5rem"}}>Is there any way to change this? I have no idea how to do this.</Typography>
            </CardContent>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
            <Typography fontFamily={"Arial"} color={"gray"} marginLeft={"auto"} sx={{fontStyle: 'italic', mr: "1rem"}}>
                Leader User, on 22 march - 12:43
            </Typography>
        </Box>
        </Card>
    );
}