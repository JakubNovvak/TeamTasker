import axios from "axios";
import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";

export default async function TempGetCurrentUserByEmail(setCurrentEmployee: React.Dispatch<React.SetStateAction<ReadEmployeeDto>>)
{
    try{
        const emailRespone = await axios.get<string>('https://185.143.119.23:7781/api/Account/authorize/email', AxiosOptions);
        //console.log("POST: Respone from API" + response.data);
        const userResponse = await axios.get<ReadEmployeeDto>(`https://185.143.119.23:7781/api/User/email?email=${emailRespone.data}`, AxiosOptions);
        setCurrentEmployee(userResponse.data);
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issue with \"TempGetCurrentUser\" GET request: ", {error});
    }
}