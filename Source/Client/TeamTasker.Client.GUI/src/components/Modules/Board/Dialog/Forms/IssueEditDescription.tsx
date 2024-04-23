import { Box, InputLabel } from "@mui/material";
import { ReadIssueDto } from "../../../../Types/ReadIssuesDto";
import { Button, Textarea } from "@mui/joy";
import React, { useEffect, useRef, useState } from "react";
import DataPostSnackbar from "../../../../Connection/Notifies/DataPostSnackbar";
import { UpdateDescriptionRequest } from "../../../API/Board/EditIssueRequests";

export default function IssueEditDescription({ReadIssueDto}: {ReadIssueDto: ReadIssueDto})
{
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);

    const [issueDesc, setIssueDesc] = useState<string>(ReadIssueDto.description);
    const [titleFocus, setTitleFocus] = useState<boolean>(false);
    const initialValue = ReadIssueDto.description;
    
    const handleCancelButtonClick = () => 
        {
        setIssueDesc(initialValue); // Przywrócenie początkowej wartości
        console.log("Zmiana w cancel button" + initialValue);
        setTitleFocus(false);
    };

    const handleSaveButtonClick = () => {
        UpdateDescriptionRequest(ReadIssueDto.id, issueDesc, setSendingState, setSendSucess, setIssueDesc, initialValue);
        setTitleFocus(false);
    }

    const handleInputChange = (event) => {
        setIssueDesc(event.target.value);
    };

    // const handleBlur = (event) => {
    // }

    useEffect(() => {
        console.log("Zmiana issueTitle: " + issueDesc);
    }, [issueDesc]);

    return(
        <>
            {sendingState == false && sendSucess == 2 ? <DataPostSnackbar TextIndex={0} IsDangerSnackBar={true}/> : <></>}
            <InputLabel sx={{mt: "1rem"}}>
                <Textarea 
                variant="plain"
                name="description"
                onFocus={()=> {setTitleFocus(true)}}
                value={issueDesc}
                onChange={handleInputChange}
                sx={{minHeight: "8rem", maxHeight: "8rem", backgroundColor: "white"}} 
                placeholder="Description...."
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