import axios, { AxiosProxyConfig, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { AxiosOptions } from "../../Types/AxiosOptions";

async function FetchData(setUserPermission: React.Dispatch<React.SetStateAction<boolean>>, setSendingState: React.Dispatch<React.SetStateAction<boolean>>)
{
    setSendingState(true);
    try{
        const response = await axios.get('https://localhost:7014/api/Account/authorize/leader', AxiosOptions);
        console.log("POST: Respone from API" + response.data);
        setSendingState(false);
        setUserPermission(true);
    
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issue with \"Check if Leader\" GET request: ", {error});
        setUserPermission(false);
        setSendingState(false);
    }
}

export default function CheckLeaderPermission(setUserPermission: React.Dispatch<React.SetStateAction<boolean>>)
{
    //const [isUserAuthorized, setIsUserAuthorized] = useState<boolean>(false);
    const [sendingState, setSendingState] = useState<boolean>(false);

    useEffect(() => {
        FetchData(setUserPermission, setSendingState);
    }, []);
}