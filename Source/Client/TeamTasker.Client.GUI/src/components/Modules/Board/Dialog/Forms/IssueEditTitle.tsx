import { Box, InputLabel } from "@mui/material";
import { ReadIssueDto } from "../../../../Types/ReadIssuesDto";
import { Button, Textarea } from "@mui/joy";
import React, { useEffect, useRef, useState } from "react";
import DataPostSnackbar from "../../../../Connection/Notifies/DataPostSnackbar";
import { UpdateTitleRequest } from "../../../API/Board/EditIssueRequests";

export default function IssueEditTitle({ReadIssueDto}: {ReadIssueDto: ReadIssueDto})
{
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);

    const [issueTitle, setIssueTitle] = useState<string>(ReadIssueDto.name);
    const [titleFocus, setTitleFocus] = useState<boolean>(false);
    const initialValue = ReadIssueDto.name;
    
    const handleInputChange = (event) => {
        setIssueTitle(event.target.value);
    };
    
    const handleCancelButtonClick = () => 
        {
        setIssueTitle(initialValue); // Przywrócenie początkowej wartości
        console.log("Zmiana w cancel button" + initialValue);
        setTitleFocus(false);
    };

    const handleSaveButtonClick = () => {
        UpdateTitleRequest(ReadIssueDto.id, issueTitle, setSendingState, setSendSucess, setIssueTitle, initialValue);
        setTitleFocus(false);
    }

    useEffect(() => {
        console.log("Zmiana issueTitle: " + issueTitle);
    }, [issueTitle]);

    return(
        <>
            {sendingState == false && sendSucess == 2 ? <DataPostSnackbar TextIndex={0} IsDangerSnackBar={true}/> : <></>}
            <InputLabel>
                <Textarea
                variant="plain"
                id="name"
                disabled={sendingState ? true : false}
                onFocus={()=> {setTitleFocus(true)}}
                value={issueTitle}
                onChange={handleInputChange}
                sx={{width: "100%", fontSize: "22px", backgroundColor: "white"}}
                placeholder="Title of the issue"
                />
            </InputLabel>
                { titleFocus ?
                <Box position={"fixed"} sx={{zIndex: "100"}}>
                    <Button id="saveButton" onClick={handleSaveButtonClick} variant="outlined" sx={{backgroundColor: "white", color: "black"}}>+</Button>
                    <Button id="undoButton" onClick={handleCancelButtonClick} variant="outlined" sx={{backgroundColor: "white", color: "black"}}>-</Button>
                </Box>
                : <></>}
        </>
    );
}