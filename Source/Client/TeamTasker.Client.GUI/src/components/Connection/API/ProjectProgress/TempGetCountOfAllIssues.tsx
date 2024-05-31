import { TempIssuesDto } from "./TempIssuesDto";
import { AxiosOptions } from "../../../Types/AxiosOptions";
import APIUrlConfig from "../APIUrlConfig";

export default async function TempGetCountOfAllIssues(projectId: number, setTempIssues: React.Dispatch<React.SetStateAction<TempIssuesDto>>)
{
    try {
        const respone = await APIUrlConfig.get<TempIssuesDto>(`/api/Issue/GetCountOfAllAndDoneIssues?projectId=${projectId}`, AxiosOptions);
        setTempIssues(respone.data);
        console.log(respone.data);
    } catch (error) {
        console.log("Some errors with issues.");
    }
}