import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";
import APIUrlConfig from "./APIUrlConfig";

export default async function TempGetUserById(employeeId: number,  setUserAvatar: React.Dispatch<React.SetStateAction<string>>, setTempUserInfo: React.Dispatch<React.SetStateAction<string>>)
{
    try {
        const respone = await APIUrlConfig.get<ReadEmployeeDto>(`/api/User/id?id=${employeeId}`, AxiosOptions);
        console.log(respone.data.avatar);
        setUserAvatar(respone.data.avatar);
        setTempUserInfo(respone.data.firstName + " " + respone.data.lastName);
    } catch (error) {
        
    }
}