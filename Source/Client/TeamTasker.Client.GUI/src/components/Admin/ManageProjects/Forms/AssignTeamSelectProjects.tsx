import { useState, useEffect } from 'react';
import { AxiosOptions } from '../../../Types/AxiosOptions';
import { Option, Select } from '@mui/joy';
import { FormControl } from '@mui/material';
import { FormikAssignTeamSetValue } from '../../../Types/CommonTypes';
import { ReadProjectDto } from '../../../Types/ReadProjectDto';
import APIUrlConfig from '../../../Connection/API/APIUrlConfig';

//TODO: Create generic Employees Select component. This in only a temporary, development solution

export default function AssignTeamSelectProjects({FormikValue, formikSetValue, idName}: {FormikValue: number, formikSetValue: FormikAssignTeamSetValue, idName: string})
{
    const [projects, setProjects] = useState<ReadProjectDto[]>([]);

    useEffect(() => {
        APIUrlConfig.get<ReadProjectDto[]>(`/api/Project`, AxiosOptions)
            .then(response => 
                {
                setProjects(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych z API:', error);
            });
    }, []);

    return(
        <>
            <FormControl>
                <Select placeholder="Select Project" value={FormikValue} onChange={(event, value) => {formikSetValue(idName, value), event}} sx={{minWidth: "18rem"}}>
                    {projects.map(project => (
                        <Option key={project.id} value={project.id}>
                            {project.name}
                        </Option>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}