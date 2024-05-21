import { Box, Button, Textarea } from "@mui/joy";
import { Avatar, Dialog, DialogContent, Divider, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { cloneElement, useEffect, useState } from "react";
import EditIssueStatusSelect from "./Forms/IssueEditStatus";
import IssueEditPriority from "./Forms/IssueEditPriority";
import IssueEditDate from "./Forms/IssueEditDate";
import dayjs from "dayjs";
import TempGetUserById from "../../../Connection/API/TempGetUserById";
import { ReadIssueDto } from "../../../Types/ReadIssuesDto";
import SendIcon from '@mui/icons-material/Send';
import IssueEditTitle from "./Forms/IssueEditTitle";
import IssueEditDescription from "./Forms/IssueEditDescription";
import CommentsSection from "./Comments/CommentsSection";

export default function IssueDescDialog({projectId, openDialog, setOpenDialog, userId, ReadIssueDto}: 
    {projectId: string, openDialog: boolean, setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>, userId: number, ReadIssueDto: ReadIssueDto})
{
    //TODO: Change these states implementation
    //*//
    const [userAvatar, setUserAvatar] = useState<string>("");
    const [tempUserInfo, setTempUserInfo] = useState<string>("");
    //*//

    // Cancel and submit related states - on hold, because of the bug
    //const [titleFocus, setTitleFocus] = useState<boolean>(false);
    //const [currentIssueInfo, setCurrentIssueInfo] = useState<ReadIssueDto>(ReadIssueDto);
    var trimmedDate = dayjs(ReadIssueDto.startDate).format('DD MMMM HH:mm');

    useEffect(() => {
        TempGetUserById(userId, setUserAvatar, setTempUserInfo);
    }, []);

    return(
        <Dialog
        maxWidth="lg"
        open={openDialog}
        onClose={() => {setOpenDialog(false)}}
        sx={{width: "100%", minHeight: "30rem"}}
        scroll={"paper"}
        >
            <DialogContent sx={{width: "50vw", minWidth: "50rem", minHeight: "30vh"}}>
                <Typography variant="h4" fontWeight={500} mb={4}>
                    Issue Summary
                </Typography>

                <IssueEditTitle ReadIssueDto={ReadIssueDto}/>

                <Divider sx={{mt: "1rem"}}/>

                <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Grid item xs={2}>
                        <EditIssueStatusSelect issueStatus={ReadIssueDto.status} issueId={ReadIssueDto.id}/>    
                    </Grid>

                    <Grid item xs={7} sx={{backgroundColor: "none"}}>
                        <Typography fontFamily={"Arial"} color={"gray"} marginLeft={"auto"} sx={{fontStyle: 'italic'}}>
                            #{ReadIssueDto.id} - Created by Placeholder Text, on {trimmedDate}
                        </Typography>
                    </Grid>

                    <Grid  item xs={2}>
                        <Select disabled defaultValue={1} sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}>
                            <MenuItem value={1}>
                                <Box display={"flex"} flexDirection={"row"} alignItems={"center"}><Avatar src={userAvatar}></Avatar>{" "}{tempUserInfo}</Box>
                                </MenuItem>
                        </Select>
                    </Grid>

                </Grid>

                <IssueEditDescription ReadIssueDto={ReadIssueDto} /> 

                <Divider sx={{mt: "1rem"}}/>

                <Grid container mt={"1rem"}>
                    <Grid item xs={3}>
                        <IssueEditPriority issueId={ReadIssueDto.id} issuePriority={ReadIssueDto.priority}/>
                    </Grid>
                    <IssueEditDate ReadIssueDto={ReadIssueDto}/>
                </Grid>
                
                <CommentsSection issueId={ReadIssueDto.id} projectId={projectId}/>

            </DialogContent>
        </Dialog>
    );
}