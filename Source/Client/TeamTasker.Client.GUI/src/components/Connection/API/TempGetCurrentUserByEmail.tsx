import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";
import APIUrlConfig from "./APIUrlConfig";

export default async function TempGetCurrentUserByEmail(setCurrentEmployee: React.Dispatch<React.SetStateAction<ReadEmployeeDto>>)
{
    try{
        const emailRespone = await APIUrlConfig.get<string>('/api/Account/authorize/email', AxiosOptions);
        //console.log("POST: Respone from API" + response.data);
        const userResponse = await APIUrlConfig.get<ReadEmployeeDto>(`/api/User/email?email=${emailRespone.data}`, AxiosOptions);
        setCurrentEmployee(userResponse.data);
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issue with \"TempGetCurrentUser\" GET request: ", {error});
    }
}