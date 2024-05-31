import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";
import { TempNotificationDto } from "../../Types/TempNotificationDto";
import APIUrlConfig from "./APIUrlConfig";

//TODO: Temp solution, due to lack of endpoints at the moment - needs to be corrected in the next week.

export default async function TempSendNotification()
{
    try {
        const responseEmail = await APIUrlConfig.get<string>('/api/Account/authorize/email', AxiosOptions);
        const responseEmployee = await APIUrlConfig.get<ReadEmployeeDto>(`/api/User/email?email=${responseEmail.data}`, AxiosOptions);
        const notifications = await APIUrlConfig.get<TempNotificationDto[]>(`/api/Notification/GetUserNotifications?id=${responseEmployee.data.id}`, AxiosOptions);
        //const tempNewNotification = notifications.data.length + 1;
        const contentOfTheNotification = "Test notification nr: " + notifications.data.length++;

        await APIUrlConfig.post(`/api/Notification/AddNotificationToUser`, {content: contentOfTheNotification, userId: responseEmployee.data.id});

        console.log("All requests passed.");
    } catch (error) 
    {
        console.log("Something went wrong, with cascade requests.");
    }
}
