import { CircularProgress, Grid, TextField } from "@mui/material";
import { DatePicker, DatePickerSlotProps, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { ReadIssueDto } from "../../../../Types/ReadIssuesDto";
import {UpdateEndDateRequest, UpdateStartDateRequest} from "../../../API/Board/EditIssueRequests";
import DataPostSnackbar from "../../../../Connection/Notifies/DataPostSnackbar";

export default function IssueEditDate({ReadIssueDto}: {ReadIssueDto: ReadIssueDto})
{
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(ReadIssueDto.startDate));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(ReadIssueDto.endDate));

    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);

    useEffect(() => {
        console.log("Przeładowanie!");
        console.log(startDate?.toString());
        console.log(sendingState);
    }, [sendSucess]);

    return(
        <>
            <Grid item xs={5}>
                {sendingState == false && sendSucess == 2 ? <DataPostSnackbar TextIndex={0} IsDangerSnackBar={true}/> : <></>}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                {sendingState == false ? 
                    <DatePicker
                        name="startDate"
                        label="Start Date"
                        maxDate={dayjs(endDate)}
                        minDate={dayjs()}
                        disabled={sendingState ? true : false}
                        //defaultValue={dayjs(startDate)}
                        value={startDate}
                        onChange={(value) => {
                            UpdateStartDateRequest(value, ReadIssueDto.id, setSendingState, setSendSucess, setStartDate);
                        }}
                        />
                        :
                        <LocalizationProvider><DatePicker label="Start Date" disabled defaultValue={startDate}/></LocalizationProvider>
                }
                </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                {sendingState == false ? 
                <DatePicker
                name="endDate"
                label="End Date"
                minDate={dayjs(startDate)}
                disabled={sendingState ? true : false}
                defaultValue={endDate}
                onChange={(value) => {
                    UpdateEndDateRequest(value, ReadIssueDto.id, setSendingState, setSendSucess, setEndDate);
                }}
                />
                : 
                <LocalizationProvider><DatePicker label="Start Date" disabled defaultValue={endDate}/></LocalizationProvider>
                }
                </LocalizationProvider>
            </Grid>
        </>
    );
    
}