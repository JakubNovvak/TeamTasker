import { AxiosOptions } from "../../../Types/AxiosOptions";
import APIUrlConfig from "../../../Connection/API/APIUrlConfig";

export async function AddCommentToPost(newComment: [number, number, string], setSendingState: React.Dispatch<React.SetStateAction<boolean>>, 
    setSendSucess: React.Dispatch<React.SetStateAction<number>>, setNewComment: React.Dispatch<React.SetStateAction<string>>)
{
    setSendingState(true);
    try{
        await APIUrlConfig.post(`/api/Comment/AddCommentToIssue`, {issueId: newComment[0], userId: newComment[1], content: newComment[2]}, AxiosOptions);
        setSendingState(false);
        setSendSucess(1);
        setNewComment("");
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
    catch(error)
    {
        console.error("There was an issie with \"AddCommentToIssue\" POST request: ", {error});
        setSendSucess(2);
        setSendingState(false);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setSendSucess(0);
    }
}