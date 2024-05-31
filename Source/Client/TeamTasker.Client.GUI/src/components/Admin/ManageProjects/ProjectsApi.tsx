import { CreateProjectDto } from "../../Types/CreateProjectDto";
import { AxiosOptions } from "../../Types/AxiosOptions";
import { AddTeamToProjectDto } from "../../Types/AddTeamToProjectDto";
import APIUrlConfig from "../../Connection/API/APIUrlConfig";

export async function CreateProjectRequest(projectToCreate: CreateProjectDto, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
    setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        const response = await APIUrlConfig.post<CreateProjectDto>(`/api/Admin/CreateProject`, projectToCreate, AxiosOptions);
        console.log("POST: Respone from API" + response.statusText);
        setSendingState(false);
        setSendSucess(1);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
    catch(error)
    {
        console.error("There was an issie with \"POSTCalendarEntry\" POST request: ", {error});
        setSendSucess(2);
        setSendingState(false);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
}

export async function AssignTeamRequest(teamToAssign: AddTeamToProjectDto, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
    setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        const response = await APIUrlConfig.post(`/api/Admin/AddTeamToProject`, teamToAssign, AxiosOptions);
        console.log("POST: Respone from API" + response.data);
        setSendingState(false);
        setSendSucess(1);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
    catch(error)
    {
        console.error("There was an issie with \"POSTCalendarEntry\" POST request: ", {error});
        setSendSucess(2);
        setSendingState(false);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
}