import { CircularProgress, Typography } from "@mui/material";
import axios, { AxiosProxyConfig, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

async function FetchData(setRoleState: React.Dispatch<React.SetStateAction<boolean>>, setSendingState: React.Dispatch<React.SetStateAction<boolean>>)
{
    const options: AxiosRequestConfig = {
        headers: {
            Authorization: 'Bearer ' + document.cookie.split('; ').filter(row => row.startsWith('JwtToken')).map(c => c.split('=')[1])[0]
        }
    };
    setSendingState(true);
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should me changed if needed
        const response = await axios.get('https://localhost:7014/api/Account/authorize/admin', options);
        console.log("POST: Respone from API" + response.data);
        setSendingState(false);
        setRoleState(true);
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issie with \"FetchData\" POST request: ", {error});
        setRoleState(false);
        setSendingState(false);
    }
}



export default function Admin()
{
    const [roleState, setRoleState] = useState<boolean>(false);
    const [sendingState, setSendingState] = useState<boolean>(false);
    
    useEffect(() => {
        FetchData(setRoleState, setSendingState);
    }, []);

    if(sendingState)
        return(
            <>
                <CircularProgress sx={{mt: "3rem"}}/>
            </>
        );

        
    if(roleState)
        return(
            <>
            <Typography fontWeight={550} fontSize={70}>
                This message can only be seen by Admin user.
            </Typography>
            </>
        );
    else
        return(
            <>
            <Typography fontWeight={550} fontSize={70}>
                You can't see Admin message...
            </Typography>
            </>
        );
}