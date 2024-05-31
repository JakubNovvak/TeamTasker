import { useState, useEffect } from 'react';
import { Option, Select } from '@mui/joy';
import { FormControl } from '@mui/material';
import { ReadEmployeeDto } from '../../Types/ReadEmployeeDto';
import { AxiosOptions } from '../../Types/AxiosOptions';
import APIUrlConfig from '../../Connection/API/APIUrlConfig';

//TODO: Create generic Employees Select component. This in only a temporary, development solution

export default function ResetPasswordUserSelect({FormikValue, formikSetValue, idName}: {FormikValue: number, formikSetValue: undefined, idName: string})
{
    const [employees, setEmployees] = useState<ReadEmployeeDto[]>([]);
    formikSetValue;


    useEffect(() => {
        APIUrlConfig.get<ReadEmployeeDto[]>(`/api/User/GetAllEmployees`, AxiosOptions)
            .then(response => 
                {
                setEmployees(response.data);
                console.log(response.data + idName);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych z API:', error);
            });
    }, []);

    return(
        <>
            <FormControl>
                <Select placeholder="Select User" value={FormikValue} onChange={(/*event, value*/) => () => {}} sx={{minWidth: "18rem"}}>
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