import { AxiosOptions } from "../../Types/AxiosOptions";
import APIUrlConfig from "./APIUrlConfig";

export default async function TempGetCurrentUser(setCurrentUserEmail: React.Dispatch<React.SetStateAction<string>>)
{

    try{
        const response = await APIUrlConfig.get<string>('/api/Account/authorize/email', AxiosOptions);
        console.log("POST: Respone from API" + response.data);
        setCurrentUserEmail(response.data);
        //await new Promise(resolve => setTimeout(resolve, 4000));
        //location.href = "/";
    }
    catch(error)
    {
        console.error("There was an issue with \"TempGetCurrentUser\" GET request: ", {error});
    }
}