import axios from "axios";
import { AxiosOptions } from "../../Types/AxiosOptions";
import { ReadEmployeeDto } from "../../Types/ReadEmployeeDto";
import { TempNotificationDto } from "../../Types/TempNotificationDto";

//TODO: Temp solution, due to lack of endpoints at the moment - needs to be corrected in the next week.

export default async function TempSendNotification()
{
    try {
        const responseEmail = await axios.get<string>('https://185.143.119.23:7781/api/Account/authorize/email', AxiosOptions);
        const responseEmployee = await axios.get<ReadEmployeeDto>(`https://185.143.119.23:7781/api/User/email?email=${responseEmail.data}`, AxiosOptions);
        const notifications = await axios.get<TempNotificationDto[]>(`https://185.143.119.23:7781/api/Notification/GetUserNotifications?id=${responseEmployee.data.id}`, AxiosOptions);
        //const tempNewNotification = notifications.data.length + 1;
        const contentOfTheNotification = "Test notification nr: " + notifications.data.length++;

        await axios.post(`https://185.143.119.23:7781/api/Notification/AddNotificationToUser`, {content: contentOfTheNotification, userId: responseEmployee.data.id});

        console.log("All requests passed.");
    } catch (error) 
    {
        console.log("Something went wrong, with cascade requests.");
    }
}
