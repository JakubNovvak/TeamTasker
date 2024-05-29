import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReadEmployeeDto } from '../../../Types/ReadEmployeeDto';
import { AxiosOptions } from '../../../Types/AxiosOptions';
import { Option, Select } from '@mui/joy';
import { FormControl } from '@mui/material';
import { FormikUsersSetValue } from '../../../Types/CommonTypes';


export default function UsersSelect({FormikValue, formikSetValue, idName}: {FormikValue: number, formikSetValue: FormikUsersSetValue, idName: string})
{
    const [employees, setEmployees] = useState<ReadEmployeeDto[]>([]);

    useEffect(() => {
        axios.get<ReadEmployeeDto[]>(`https://185.143.119.23:7781/api/User/GetAllEmployees`, AxiosOptions)
            .then(response => 
                {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych z API:', error);
            });
    }, []);

    return(
        <>
            <FormControl>
                <Select placeholder="Select User to add" value={FormikValue} onChange={(event, value) => {formikSetValue(idName, value), event}} sx={{minWidth: "18rem"}}>
                    {employees.map(employee => (
                        <Option key={employee.id} value={employee.id}>
                            {employee.firstName} {employee.lastName}, {employee.email === "" ? "<email placeholder>" : employee.email}
                        </Option>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}