import { AxiosOptions } from "../../Types/AxiosOptions";
import APIUrlConfig from "./APIUrlConfig";

export async function ChangeTaskStatus(issueId: number, issueStatus: string | number, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        await APIUrlConfig.put(`/api/Issue/UpdateIssueStatus`, {"id": issueId, "status": issueStatus}, AxiosOptions);
        console.log("Success!");
        setSendingState(false);
        setSendSucess(1);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSendSucess(0);
    }
    catch(error)
    {
        console.error("There was an issie with \"ChangeTaskStatus\" POST request: ", {error});
        setSendSucess(2);
        setSendingState(false);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSendSucess(0);
    }
}