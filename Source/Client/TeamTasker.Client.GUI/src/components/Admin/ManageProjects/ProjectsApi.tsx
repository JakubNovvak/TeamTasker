import axios from "axios";
import { CreateProjectDto } from "../../Types/CreateProjectDto";
import { AxiosOptions } from "../../Types/AxiosOptions";

export async function CreateProjectRequest(projectToCreate: CreateProjectDto, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
    setSendSucess: React.Dispatch<React.SetStateAction<number>>)
{
    setSendingState(true);
    try{
        const response = await axios.post('https://localhost:7014/api/Admin/CreateProject', projectToCreate, AxiosOptions);
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