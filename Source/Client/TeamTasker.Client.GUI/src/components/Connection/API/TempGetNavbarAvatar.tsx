import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";
import APIUrlConfig from "./APIUrlConfig";

export default async function TempGetNavbarAvatar(setAvatarUrl: React.Dispatch<React.SetStateAction<string>>)
{

    try{
        const email = await APIUrlConfig.get<string>('/api/Account/authorize/email', AxiosOptions);
        const response = await APIUrlConfig.get<ReadEmployeeDto>(`/api/User/email?email=${email.data}`, AxiosOptions);
        console.log("POST: Respone from API" + response.data);
        setAvatarUrl(response.data.avatar);
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issue with \"Get Avatar Url\" GET request: ", {error});
    }
}