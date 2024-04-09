import { AxiosOptions } from "../../Types/AxiosOptions";
import { AddUserToTeamForm, CreateTeamForm } from "../../Types/CommonTypes";

import axios from "axios";

export async function AddUserToTeamRequest(UserToAdd: AddUserToTeamForm, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
                                                                                              setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        //CAUTION: there is only one tutor in DB, with no near plans of adding more. Should me changed if needed
        const response = await axios.post('https://localhost:7014/api/Admin/AddEmployeeToTeam', UserToAdd, AxiosOptions);
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

export async function CreateTeamRequest(teamToCreate: CreateTeamForm, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
    setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
setSendingState(true);
try{
//CAUTION: there is only one tutor in DB, with no near plans of adding more. Should me changed if needed
const response = await axios.post('https://localhost:7014/api/Admin/CreateTeam', teamToCreate, AxiosOptions);
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

