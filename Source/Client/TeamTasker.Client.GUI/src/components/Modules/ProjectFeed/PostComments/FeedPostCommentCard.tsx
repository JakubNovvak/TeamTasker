import { Avatar, Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function FeedPostCommentCard()
{
    //var trimmedDate = dayjs(cardComment.created).format('DD MMMM HH:mm');
    //var commentEmployeeId = commentEmployee !== undefined ? commentEmployee.id : 0;

    return(
        <Card elevation={4} sx={{mb: "1.5rem"}}>
        <Box display={"flex"} flexDirection={"row"} minWidth={600} maxWidth={600} minHeight={100}>
            <CardContent>
                <Avatar src={""}>?</Avatar>
            </CardContent>

            <CardContent>
                <Typography sx={{mt: "0.5rem"}}>{"Comment Content"}</Typography>
            </CardContent>
        </Box>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} mb={1}>
            {true
            ?
                <><Button sx={{color: "gray"}}>DELETE</Button></>
            : 
            <></>
            }
            <Typography fontWeight={550} fontFamily={"Arial"} color={"gray"} marginLeft={"auto"} sx={{fontStyle: 'italic'}}>
                {"Name Surname"}
            </Typography>
            <Typography fontFamily={"Arial"} color={"gray"} sx={{fontStyle: 'italic', mr: "1rem"}}>
                , on 24 march 16:54{/*Here put trimmed Date, when commented by user*/}
            </Typography>
        </Box>
        </Card>
    );
}